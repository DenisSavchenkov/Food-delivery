export interface Product {
  id: string;
  imageURL: string;
  title: string;
  description: string;
  price: number;
  weight: number;
  category: string;
}

export interface ChildrenProp {
  children: React.ReactNode;
}
