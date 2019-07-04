
import * as superZloid from '../scripts/superZloid.js'

export const darkskyNetApi = () => {
  async function getData() {
    // let response = await fetch('https://api.github.com/users/zloid/followers')
    let response = await fetch('https://api.darksky.net/forecast/c39d0f04e1490149fefb6093ff69fe7b/50.264893,19.023781')
    let data = await response.json()
    return data
  }

  getData().then(data => console.log(data))
//   getData().then(data => data.map(repoNameObj => console.log(repoNameObj)))
//   getData().then(data => data.map(repoNameObj => console.log(repoNameObj.login)))
//   getData().then(data => data.map(repoNameObj => console.log(repoNameObj.avatar_url)))
//   getData().then(data => data.map(repoNameObj => {console.log(repoNameObj.name)
    // superZloid.createElement({inner: repoNameObj.name})
// }))
}
