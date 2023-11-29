export interface Product {
  id: number;
  imageURL: string;
  title: string;
  description: string;
  price: number;
  weight: number;
  category: string;
}

export interface ProductsListProp {
  products: Product[];
}

export interface ProductsItemProp {
  imageURL: string;
  title: string;
  description: string;
  price: number;
  weight: number;
}

export interface ChildrenProp {
  children: React.ReactNode;
}
