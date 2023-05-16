import { IProductService } from '../../../src/app/product/interfaces'
import { ProductStatus, ProductType } from '../../../src/app/product/types'

const mockedProducts: ProductType[] = [
  { id: '1', name: 'Product 1', price: 12.7, status: ProductStatus.ENABLED }
]

class ProductServiceStub implements IProductService {
  get (): ProductType[] {
    return mockedProducts
  }
}

const makeSut = (): IProductService => new ProductServiceStub()

describe('Product Service Unit Tests', () => {
  it('Should call Get method with no params to get all', () => {
    const sut = makeSut()
    const allProducts = sut.get()
    expect(allProducts?.length).toBeDefined()
    expect(allProducts).toEqual(mockedProducts)
  })
})
