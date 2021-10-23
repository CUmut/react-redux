import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  card: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      return { ...state, card: [...state.card, action.payload] };
    case "SEPETTEN_CİKAR":
      return {
        ...state,
        card: state.card.filter((item, index) => index !== action.payload)
      };

    default:
      return state;
  }
};
