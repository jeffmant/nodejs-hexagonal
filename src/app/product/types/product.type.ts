import { ProductStatus } from './product-status.enum'

export type ProductType = {
  id: string
  name: string
  price: number
  status: ProductStatus
}
