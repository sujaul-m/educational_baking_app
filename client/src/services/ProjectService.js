const baseURL = 'http://localhost:3000/api/projects/'

export default {
  getProject(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  updateProject(id, project){
    delete project._id;
    return fetch(baseURL + id, {
      method: "PUT",
      body: JSON.stringify(project),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json)
  }
}
