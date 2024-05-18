export function generateGUID(): string {
  const s4 = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

export function generateRandomNumber(max: number) {
  return Math.floor(Math.random() * max)
}

export function haveCommonValue(arr1: string[], arr2: string[]): boolean {
  // Convert the first array to a Set for faster lookup
  const set1 = new Set(arr1)

  // Check if any element in the second array exists in the Set created from the first array
  for (const value of arr2) {
    if (set1.has(value)) {
      return true
    }
  }

  // If no common element is found, return false
  return false
}
