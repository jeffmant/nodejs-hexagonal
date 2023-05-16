import { ProductType } from '../types'

export interface IProductService {
  get: () => ProductType[]
}
