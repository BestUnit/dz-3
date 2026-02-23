export interface IClickCounterProps {
  title?: string;
}

export interface IClickCounterEmits {
  (e: 'decrement', count: number): void;
}

export interface IProduct {
  name: string;
  price: number;
  img: string;
}

export interface IProductCardProps {
  product: IProduct;
}
