export interface IProduct {
  isValid: () => boolean
  enable: () => void
  disable: () => void
  getId: () => string
  getName: () => string
  getStatus: () => string
  getPrice: () => number
}

export enum ProductStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled'
}

export default class Product implements IProduct {
  private readonly id: string
  private readonly name: string
  private readonly price: number
  private status: ProductStatus

  constructor (id: string, name: string, price: number, status: ProductStatus) {
    this.id = id
    this.name = name
    this.price = price
    this.status = status
  }

  isValid (): boolean {
    return this.getStatus() === ProductStatus.ENABLED
  }

  enable (): void {
    this.price > 0
      ? this.status = ProductStatus.ENABLED
      : this.status = ProductStatus.DISABLED
  }

  disable (): void {
    this.status = ProductStatus.DISABLED
  }

  getId (): string {
    return this.id
  }

  getName (): string {
    return this.name
  }

  getStatus (): string {
    return this.status
  }

  getPrice (): number {
    return this.price
  }
}
