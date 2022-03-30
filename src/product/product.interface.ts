export interface ProductInterface {
  lm: number;
  name: string;
  free_shipping: number;
  description: string;
  price: number;
  category: number;
}

export interface ProductJobInterface {
  product: ProductInterface;
}
