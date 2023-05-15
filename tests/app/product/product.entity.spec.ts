import { Product } from '../../../src/app/product'
import { ProductType, ProductStatus } from '../../../src/app/product/types'

const PRODUCT: ProductType = {
  id: '1',
  name: 'Product 1',
  price: 12.7
}

const makeSut = (product: ProductType): Product => {
  return new Product(product.id, product.name, product.price)
}

describe('Product Unit Tests', () => {
  it('Should enable a Product if the price is major of 0', () => {
    const sut = makeSut(PRODUCT)
    expect(sut.getStatus()).toBe(ProductStatus.ENABLED)
  })

  it('Should not enable the Product if the price is 0 or lower', () => {
    const sut = makeSut({ ...PRODUCT, price: 0 })
    expect(sut.getStatus()).toBe(ProductStatus.DISABLED)
  })

  it('Should return true if Product is valid', () => {
    const sut = makeSut(PRODUCT)
    expect(sut.isValid()).toBe(true)
  })

  it('Should return false if Product is not valid', () => {
    const sut = makeSut({ ...PRODUCT, price: 0 })
    expect(sut.isValid()).toBe(false)
  })
})
