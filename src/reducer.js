export default function reducer(state = [], action) {
  if (action.type === "searchSelected")
    return [
      //   ...state,
      {
        id: action.payload.id,
        description: action.payload.description,
      },
    ];
  return state;
}
