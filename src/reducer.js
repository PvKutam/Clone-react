export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:" BQAyY-omhbDPdG-QK3sf5eC_Q5WwoYUglf8MCROuP9MitooEnQoZBgdg7hL9ReQHQ3HjS3DsPyIuQ7CcEDYdTyekFQtdampWqP6Rr7Hom4oXL1ArytsAqNSDTKyH669Em7D5qM_1vv60jx39xRvKyIfzKaiB8XYGYyWFlyIzlv9Q2CU6i891qoOPiPdTH0iJ1SDLLITxRLeDNQwA5g",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
