import { IProduct } from './interfaces'
import { ProductStatus } from './types/product-status.enum'

export class Product implements IProduct {
  private readonly id: string
  private readonly name: string
  private readonly price: number
  private status: ProductStatus

  constructor (id: string, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price

    this.price > 0 ? this.enable() : this.disable()
  }

  isValid (): boolean {
    return this.getStatus() === ProductStatus.ENABLED
  }

  enable (): boolean {
    if (this.price > 0) {
      this.status = ProductStatus.ENABLED
      return true
    }

    return false
  }

  disable (): boolean {
    if (this.price <= 0) {
      this.status = ProductStatus.DISABLED
      return true
    }

    return false
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
