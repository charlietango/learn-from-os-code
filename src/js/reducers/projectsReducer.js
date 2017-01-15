export default function reducer(state={
    projects: [],
    fetching: false,
    error: null,
    showResults: false,
  }, action) {
  console.log("a intrat in reducer");
  switch(action.type) {
    case "FETCH_PROJECTS_STARTED": {
      return {...state, fetching: true};
    }
    case "FETCH_PROJECTS_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_PROJECTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        showResults: true,
        projects: action.payload,
      }
    }
    case "HIDE_PROJECTS": {
      return {
        ...state,
        showResults: false,
        projects: [],
      }
    }
  }
  return state;
}
