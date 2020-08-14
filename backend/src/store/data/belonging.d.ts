export declare type Item = {
  id: string,
  name: string
}

export declare type Category = {
  id: string,
  name: string,
  categories: Category[],
  items: Item[]
}

export declare type RawBelongings = Category[]