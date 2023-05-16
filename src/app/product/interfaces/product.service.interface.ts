import { ProductType } from '../types'

export interface IProductService {
  get: () => ProductType[]
  getById: (id: string) => ProductType | null
}
