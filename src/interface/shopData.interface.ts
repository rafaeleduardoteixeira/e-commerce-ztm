export interface IShopData {
  id: number;
  title: string;
  routeName: string;
  items: IShopDataItems[];
}

export interface IShopDataItems {
  id: number;
  name: string;
  imageURL: string;
  price: number;
}
