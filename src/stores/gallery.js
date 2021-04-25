import { readable, derived } from 'svelte/store'

const images = [
  'medcreds-consent', 'medcreds-homepage', 'medcreds-issue-test', 'medcreds-mobile-menu', 'medcreds-mobile-selfcheck', 'medcreds-mobile-view',
  'medcreds-role-editing', 'medcreds-self-verifier', 'medcreds-selfcheck', 'medcreds-sms-selfcheck', 'medcreds-temp', 'medcreds-temp-portal',
  'medcreds-verifier', 'medcreds-verify-daterange', 'medcreds-verify-sms', 'medcreds-verify-w2w', 'medcreds-verify-wallet'
]

export const small = readable(images.map(name => ({ name, path: `g/medcreds/${name}-200.webp` }) ))

export const large = readable(images.map(name => ({ name, path: `g/medcreds/${name}-800.webp` }) ))

// function getImages(company = 'medcreds') {

//   const images = readable({
//     medcreds: [
//       'medcreds-consent', 'medcreds-homepage', 'medcreds-issue-test', 'medcreds-mobile-menu',r 'medcreds-mobile-selfcheck', 'medcreds-mobile-view',
//       'medcreds-role-editing', 'medcreds-self-verifier', 'medcreds-selfcheck', 'medcreds-sms-selfcheck', 'medcreds-temp', 'medcreds-temp-portal',
//       'medcreds-verifier', 'medcreds-verify-daterange', 'medcreds-verify-sms', 'medcreds-verify-w2w', 'medcreds-verify-wallet'
//     ]
//   })

// 	return {
// 		images: images[company],
// 		small: () => derived(images[company], $small => images[company].map(image => `g/medcreds/${image}-200.webp`)),
// 		medium: () => derived(images[company], $medium => images[company].map(image => `g/medcreds/${image}-400.webp`)),
// 		large: () => derived(images[company], $large => images[company].map(image => `g/medcreds/${image}-800.webp`)),
//     xlarge: () => derived(images[company], $xlarge => images[company].map(image => `g/medcreds/${image}-1200.webp`)),
// 	};
// }

// export const images = getImages('medcreds')
