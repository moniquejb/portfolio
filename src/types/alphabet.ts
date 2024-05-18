export type Shape = {
  id: string
  x: number
  y: number
  isDragging?: boolean
  letter: LetterNames
  letterColor: string
  className?: string
  isRemoved?: boolean
  zIndex: number
}

export type LetterNames =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | 'comma'
  | 'exclamation'
  | 'question'
  | 'smiley'

export type LetterSvg = {
  id: LetterNames
  svgCode: string
}

export type LetterColours = 'primary' | 'secondary' | 'tertiary' | 'dark'
export type LetterColoursNoDark = 'primary' | 'secondary' | 'tertiary'
