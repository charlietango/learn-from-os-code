import axios from "axios";

export function fetchProjects(technology) {
  return function(dispatch) {
    dispatch({type: "FETCH_PROJECTS_STARTED"});
    axios.get("https://runkit.io/charlietango592/5877e42d9b9efc001447a5cf/branches/master")
    .then((response) => {
      dispatch({type: "FETCH_PROJECTS_FULFILLED", payload: response.data});
    })
    .catch((error) => {
      dispatch({type: "FETCH_PROJECTS_REJECTED", payload: error})
    });
  }
}
