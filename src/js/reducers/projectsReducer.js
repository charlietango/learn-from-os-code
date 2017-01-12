export default function reducer(state={
    projects: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch(action.type) {
    case "FETCH_PROJECTS_STARTED": {
      console.log("Fetch projects started");
      return {...state, fetching: true};
    }
    case "FETCH_PROJECTS_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_PROJECTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        projects: action.payload,
      }
    }
  }
  return state;
}
