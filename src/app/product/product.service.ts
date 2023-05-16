import { IProductService } from './interfaces'
import { ProductType } from './types'

export class ProductService implements IProductService {
  get (): ProductType[] {
    return []
  }

  getById (id: string): ProductType | null {
    return null
  }
}
