import axios from "axios";

export function fetchProjects(technology) {
  return function(dispatch) {
    var uri = `https://api.github.com/search/repositories?q=learn+${technology}+in:description,name,readme`
    axios.get(uri)
    .then((response) => {
      dispatch({type: "FETCH_PROJECTS_STARTED"});
      dispatch({type: "FETCH_PROJECTS_FULFILLED", payload: response.data.items, meta: { debounce: 'simple' }});
    })
    .catch((error) => {
      dispatch({type: "FETCH_PROJECTS_REJECTED", payload: error})
    });
  }
}

export function hideProjects() {
  return {
    type: "HIDE_PROJECTS"
  }
}
