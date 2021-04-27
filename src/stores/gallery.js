import { readable, writable, derived } from 'svelte/store'

const images = [
  'medcreds-consent', 'medcreds-homepage', 'medcreds-issue-test', 'medcreds-mobile-menu', 'medcreds-mobile-selfcheck',
  'medcreds-role-editing', 'medcreds-self-verifier', 'medcreds-selfcheck', 'medcreds-sms-selfcheck', 'medcreds-temp', 'medcreds-temp-portal',
  'medcreds-verifier', 'medcreds-verify-daterange', 'medcreds-verify-sms', 'medcreds-verify-w2w', 'medcreds-verify-wallet', 'medcreds-mobile-view'
]

export const large = readable(images.map(name => ({ name, path: `g/medcreds/${name}-1200.webp` }) ))
export const small = readable(images.map(name => ({ name, path: `g/medcreds/${name}-200.webp` }) ))
export const originals = readable(images.map(name => ({ name, path: `g/medcreds/${name}-1600.png` }) ))


export const selected = writable(null)

export const selectedLarge = derived(
  [selected, originals],
  ([$selected, $originals]) => {
    if (!$selected) return null
    return $originals.find(image => image.name === $selected.name)
  }
)

export const nextLarge = derived(
  [selected, originals],
  ([$selected, $originals]) => {
    if (!$selected) return null
    let index = $originals.findIndex(image => image.name === $selected.name)
    if ($originals.length - 1 === index) index = 0
    return $originals[index + 1]
  }
)

export const lastLarge = derived(
  [selected, originals],
  ([$selected, $originals]) => {
    if (!$selected) return null
    let index = $originals.findIndex(image => image.name === $selected.name)
    if (index === 0) index = $originals.length - 1
    return $originals[index - 1]
  }
)

export const selectedSmall = derived(
  [selected, small],
  ([$selected, $small]) => {
    if (!$selected) return []
    return $small
  }
)
