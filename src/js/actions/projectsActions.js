import axios from "axios";

export function fetchProjects(technology) {
  return function(dispatch) {
    dispatch({type: "FETCH_PROJECTS_STARTED"});
    var uri = `https://api.github.com/search/repositories?q=learn+${technology}+in:description,name,readme`
    axios.get(uri)
    .then((response) => {
      dispatch({type: "FETCH_PROJECTS_FULFILLED", payload: response.data.items, meta: { debounce: 'simple' }});
    })
    .catch((error) => {
      dispatch({type: "FETCH_PROJECTS_REJECTED", payload: error})
    });
  }
}
