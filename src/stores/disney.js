import { readable, writable, derived } from 'svelte/store'

const images = [
  'creating-collections',
  'import-stream',
  'inspect-stream',
  'playback-url-generator',
  'search-playlists'
]

export const small = readable(images.map(name => ({ name, path: `g/disney/${name}-200.webp` }) ))
export const large = readable(images.map(name => ({ name, path: `disney/${name}.gif` }) ))


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
