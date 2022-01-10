export function fetchCats() {
  return async function catFetcher(dispatch) {
    dispatch({ type: "cats/catsLoading" });
    const response = await fetch("https://learn-co-curriculum.github.io/cat-api/cats.json");
    const cats = await response.json();
    dispatch({ type: "cats/catsLoaded", payload: cats.images });
  };
}

const initialState = {
  entities: [],
  status: "idle",
};

export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/catsLoading":
      return { ...state, status: "loading" };
    case "cats/catsLoaded":
      return { ...state, entities: action.payload, status: "idle" };
    default:
      return state;
  }
}
