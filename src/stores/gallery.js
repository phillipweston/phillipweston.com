import { readable, writable, derived } from 'svelte/store'

const images = [
  'medcreds-consent', 'medcreds-homepage', 'medcreds-issue-test', 'medcreds-mobile-menu', 'medcreds-mobile-selfcheck', 'medcreds-mobile-view',
  'medcreds-role-editing', 'medcreds-self-verifier', 'medcreds-selfcheck', 'medcreds-sms-selfcheck', 'medcreds-temp', 'medcreds-temp-portal',
  'medcreds-verifier', 'medcreds-verify-daterange', 'medcreds-verify-sms', 'medcreds-verify-w2w', 'medcreds-verify-wallet'
]

export const small = readable(images.map(name => ({ name, path: `g/medcreds/${name}-200.webp` }) ))
export const large = readable(images.map(name => ({ name, path: `g/medcreds/${name}-1200.webp` }) ))

export const selected = writable(null)

export const selectedLarge = derived(
  [selected, large],
  ([$selected, $large]) => {
    if (!$selected) return null
    return $large.find(image => image.name === $selected.name)
  }
)

export const nextLarge = derived(
  [selected, large],
  ([$selected, $large]) => {
    if (!$selected) return null
    let index = $large.findIndex(image => image.name === $selected.name)
    if ($large.length - 1 === index) index = 0
    return $large[index + 1]
  }
)

export const lastLarge = derived(
  [selected, large],
  ([$selected, $large]) => {
    if (!$selected) return null
    let index = $large.findIndex(image => image.name === $selected.name)
    if (index === 0) index = $large.length - 1
    return $large[index - 1]
  }
)

export const selectedSmall = derived(
  [selected, small],
  ([$selected, $small]) => {
    if (!$selected) return []
    return $small
    // const center = Math.ceil(($small.length +1) / 2)
    // let images = $small.filter(img => img.name !== $selected.name)
    // images.splice(center, 0, $selected)
    return images
  }
)


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
