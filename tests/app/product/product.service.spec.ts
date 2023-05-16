import {
  ProductService,
  IProductService,
  ProductStatus,
  ProductType
} from '../../../src/app/product'

const mockedProducts: ProductType[] = [
  { id: '1', name: 'Product 1', price: 12.7, status: ProductStatus.ENABLED },
  { id: '2', name: 'Product 2', price: 0, status: ProductStatus.DISABLED }
]

const makeSut = (): IProductService => new ProductService()

describe('Product Service Unit Tests', () => {
  it('Should call Get method with no params to get all', () => {
    const sut = makeSut()
    jest.spyOn(sut, 'get').mockImplementationOnce(() => mockedProducts)
    const allProducts = sut.get()
    expect(allProducts?.length).toBeDefined()
    expect(allProducts).toEqual(mockedProducts)
  })

  it('Should call Get by Id method with valid id', () => {
    const sut = makeSut()
    const productId = '1'
    jest.spyOn(sut, 'getById').mockImplementationOnce(() => mockedProducts[productId])
    const foundProduct = sut.getById(productId)
    expect(foundProduct).toBeDefined()
    expect(foundProduct).toEqual(mockedProducts[productId])
  })
})
