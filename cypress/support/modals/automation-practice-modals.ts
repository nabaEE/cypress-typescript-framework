export interface ProductsResponse {
  responseCode: number;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  category: Category;
}

export interface Category {
  usertype: UserType;
  category: string;
}

export interface UserType {
  usertype: string; // e.g., "Women", "Men"
}