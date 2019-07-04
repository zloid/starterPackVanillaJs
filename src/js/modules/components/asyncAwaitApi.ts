import * as superZloid from '../scripts/superZloid.js'

export const asyncAwaitApi = () => {
  async function getData() {
    // let response = await fetch('https://api.github.com/users/zloid/followers')
    let response = await fetch('https://api.github.com/users/zloid/repos')
    let data = await response.json()
    return data
  }

  getData().then(data => console.log(data))
//   getData().then(data => data.map(repoNameObj => console.log(repoNameObj)))
//   getData().then(data => data.map(repoNameObj => console.log(repoNameObj.login)))
//   getData().then(data => data.map(repoNameObj => console.log(repoNameObj.avatar_url)))
  getData().then(data => data.map(repoNameObj => {console.log(repoNameObj.name)
    superZloid.createElement({inner: repoNameObj.name})
}))
}
