import { IProduct } from "./IProduct";

export type MainNavigationParams = {
  splash: undefined;
  onboarding: undefined;
  home: undefined;
  productDetail: { itemId: string},
  editProduct: { itemData: IProduct}
};
