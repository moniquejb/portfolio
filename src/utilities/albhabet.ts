import type { LetterColours, LetterColoursNoDark, LetterNames } from '@/types/alphabet'
import { generateRandomNumber } from '.'
import { colours, letters } from '@/data/alphabet'

export function getRandomLetter(): LetterNames {
  const randomIndex = generateRandomNumber(letters.length)
  return letters[randomIndex]
}

export function getRandomColour(): LetterColoursNoDark {
  // remove dark from colour selection, as it is always used as an outline colour
  const { dark, ...clone } = colours
  const keys = Object.keys(clone)
  const randomIndex = generateRandomNumber(keys.length)
  const colourKey = keys[randomIndex] as LetterColoursNoDark
  return colourKey
}
