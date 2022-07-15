export default function reducer(state = [], action) {
  if (action.type === "searchSelected")
    return [
      // ...state,
      {
        id: action.payload.id,
        description: action.payload.description,
      },
    ];
  else if (action.type === "searchTerm")
    return [
      {
        industry: action.payload.industry,
        hashtag: action.payload.term.term,
        handle: action.payload.handle,
      },
    ];
  return state;
}
