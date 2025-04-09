export interface Product {
  name: string;
  price: number;
}

export interface Quote {
  client: string;
  products: Product[];
  total: number;
  date: string;
}
