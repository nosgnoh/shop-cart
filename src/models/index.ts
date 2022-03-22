export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ICartProduct extends IProduct  {
  qty: number;
}

export interface ICartTotal {
  productQuantity: number;
  installments: number;
  totalPrice: number;
  currencyId: string;
  currencyFormat: string;
}

export interface IGetProductsResponse {
  data: {
  };
}

export interface Action {
  type: string,
  payload: ICartProduct
}
