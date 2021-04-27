import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import image from 'svelte-image'

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true
				},
				preprocess: {
					...image({
						optimizeAll: true, // optimize all images discovered in img tags
					
						// Case insensitive. Only files whose extension exist in this array will be
						// processed by the <img> tag (assuming `optimizeAll` above is true). Empty
						// the array to allow all extensions to be processed. However, only jpegs and
						// pngs are explicitly supported.
						imgTagExtensions: ["jpg", "jpeg", "png"],
					
						// Same as the above, except that this array applies to the Image Component.
						// If the images passed to your image component are unknown, it might be a
						// good idea to populate this array.
						componentExtensions: [],
					
						inlineBelow: 10000, // inline all images in img tags below 10kb
					
						compressionLevel: 8, // png quality level
					
						quality: 100, // jpeg/webp quality level
					
						tagName: "Image", // default component name
					
						sizes: [200, 400, 800, 1200], // array of sizes for srcset in pixels
					
						// array of screen size breakpoints at which sizes above will be applied
						breakpoints: [375, 768, 1024],
					
						outputDir: "g/",
					
						// should be ./static for Sapper and ./public for plain Svelte projects
						publicDir: "./static/",
					
						placeholder: "trace", // or "blur",
					
						// WebP options [sharp docs](https://sharp.pixelplumbing.com/en/stable/api-output/#webp)
						webpOptions: {
							quality: 75,
							lossless: false,
							force: true
						},
					
						webp: true,
					
						// Potrace options for SVG placeholder
						trace: {
							background: "#fff",
							color: "#002fa7",
							threshold: 120
						},
					
						// Wheter to download and optimize remote images loaded from a url
						optimizeRemote: true,
					
						//
						// Declared image folder processing
						//
						// The options below are only useful if you'd like to process entire folders
						// of images, regardless of whether or not they appear in any templates in
						// your application (in addition to all the images that are found at build
						// time). This is useful if you build dynamic strings to reference images you
						// know should exist, but that cannot be determined at build time.
					
						// Relative paths (starting from `/static`) of folders you'd like to process
						// from top to bottom. This is a recursive operation, so all images that match
						// the `processFoldersExtensions` array will be processed. For example, an
						// array ['folder-a', 'folder-b'] will process all images in
						// `./static/folder-a/` and `./static/folder-b`.
						processFolders: ['disney', 'medcreds'],
					
						// When true, the folders in the options above will have all subfolders
						// processed recursively as well.
						processFoldersRecursively: true,
					
						// Only files with these extensions will ever be processed when invoking
						// `processFolders` above.
						processFoldersExtensions: ["jpeg", "jpg", "png"],
					
						// Add image sizes to this array to create different asset sizes for any image
						// that is processed using `processFolders`
						processFoldersSizes: true
					})
				}
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				preventAssignment: true,
				values:{
					'process.browser': false,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn,
	}
};
