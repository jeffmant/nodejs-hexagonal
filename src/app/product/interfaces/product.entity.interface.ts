export interface IProduct {
  isValid: () => boolean
  enable: () => void
  disable: () => void
  getId: () => string
  getName: () => string
  getStatus: () => string
  getPrice: () => number
}
