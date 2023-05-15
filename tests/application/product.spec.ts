import Product, { ProductStatus } from '../../src/application/product'

describe('Product Unit Tests', () => {
  it('Should enable a Product if the price is major of 0', () => {
    const sut = new Product('1', 'Product 1', 12.7)
    expect(sut.getStatus()).toBe(ProductStatus.ENABLED)
  })

  it('Should not enable the Product if the price is 0 or lower', () => {
    const sut = new Product('1', 'Product 1', 0)
    expect(sut.getStatus()).toBe(ProductStatus.DISABLED)
  })
})
