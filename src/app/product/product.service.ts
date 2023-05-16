import { IProductService } from './interfaces'
import { ProductType } from './types'

export class ProductService implements IProductService {
  get (): ProductType[] {
    return []
  }
}
