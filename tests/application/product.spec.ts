import Product, { ProductStatus } from '../../src/application/product'

describe('Product Unit Tests', () => {
  it('Should enable a Product', () => {
    const sut = new Product('1', 'Product 1', 12.7, ProductStatus.DISABLED)
    sut.enable()
    expect(sut.getStatus()).toBe(ProductStatus.ENABLED)
  })
})
