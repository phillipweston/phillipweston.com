import { readable, writable, derived } from 'svelte/store'

const images = [
  'medcreds-consent', 'medcreds-homepage', 'medcreds-issue-test', 'medcreds-mobile-menu', 'medcreds-mobile-selfcheck',
  'medcreds-role-editing', 'medcreds-self-verifier', 'medcreds-selfcheck', 'medcreds-sms-selfcheck', 'medcreds-temp', 'medcreds-temp-portal',
  'medcreds-verifier', 'medcreds-verify-daterange', 'medcreds-verify-sms', 'medcreds-verify-w2w', 'medcreds-verify-wallet', 'medcreds-mobile-view'
]
export const small = readable(images.map(name => ({ name, path: `g/medcreds/${name}-200.webp` }) ))
export const medium = readable(images.map(name => ({ name, path: `g/medcreds/${name}-800.webp` }) ))
export const large = readable(images.map(name => ({ name, path: `g/medcreds/${name}-1200.webp` }) ))
export const xlarge = readable(images.map(name => ({ name, path: `g/medcreds/${name}-1600.png` }) ))


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
  }
)
