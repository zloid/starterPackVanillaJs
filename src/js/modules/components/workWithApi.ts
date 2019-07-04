import * as superZloid from '../scripts/superZloid.js'
export const workWithApi = () => {
//   ;(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        //   console.log(data)
        superZloid.createElement({ tagName: 'img', id: 'imgId' })
        document.getElementById('imgId').setAttribute('src', data.message)
        document.getElementById('imgId').setAttribute('width', '200')
      })

    superZloid.createElement({ id: 'reloadPage', inner: 'get new dog' })
    document
      .querySelector('#reloadPage')
      .addEventListener('click', function(ev) {
        document.location.reload(true)
      })
      let aa
//   })()
}
