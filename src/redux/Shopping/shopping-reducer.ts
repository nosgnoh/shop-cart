import * as actionTypes from "./shopping-types";
import { Action, ICartProduct } from '../../models'

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Xiaomi",
      description:
        "Có một thiết kế khung viền thời thượng, một hiệu năng đầy mạnh mẽ cũng như được tích hợp nhiều tiện ích đầy hữu ích. Xiaomi Redmi Note 11S sẵn sàng đem đến cho bạn những trải nghiệm vô cùng hoàn hảo về chơi game, các tác vụ sử dụng hằng ngày hay sự ấn tượng từ vẻ đẹp bên ngoài.",
      price: 15.0,
      image:
        "https://cdn.tgdd.vn/2022/03/campaign/Group4313-464x517-5.png",
    },
    {
      id: 2,
      title: "Sam sung galaxy A52",
      description:
        "Samsung đã chính thức giới thiệu chiếc điện thoại Galaxy A52s 5G đến người dùng, đây phiên bản nâng cấp của Galaxy A52 5G ra mắt cách đây không lâu, với ngoại hình không đổi nhưng được nâng cấp đáng kể về thông số cấu hình bên trong.",
      price: 20.0,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/247507/samsung-galaxy-a52s-5g-1-4.jpg",
    },
    {
      id: 3,
      title: "Vivo Y31",
      description:
        "Vivo chính thức tung ra chiếc điện thoại Vivo Y21s với hàng loạt các ưu điểm nổi bật, không chỉ ngoại hình bên ngoài mà cả sức mạnh bên trong. Đặc biệt, chiếc smartphone này còn sở hữu mức giá cực tốt trong phân khúc, hứa hẹn sẽ đáp ứng tốt nhu cầu giải trí của bạn.",
      price: 20.0,
      image:
      "https://cdn.tgdd.vn/Products/Images/42/267871/xiaomi-redmi-note-11s-1-5.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};


const shopReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item: ICartProduct) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item: ICartProduct) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: ICartProduct) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item: ICartProduct) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
