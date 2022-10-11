export default function reducer(state = [], action) {
  if (action.type === "searchSelected")
    return [
      // ...state,
      {
        id: action.payload.id,
        description: action.payload.description,
      },
    ];
  else if (action.type === "searchQuery")
    return [
      {
        industry: action.payload.industry,
        hashtag: action.payload.query.query,
        handle: action.payload.handle,
      },
    ];
  return state;
}
