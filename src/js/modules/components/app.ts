// import { store } from '../store/store.js'
import * as superZloid from '../scripts/superZloid.js'
export const app = () => {
  // ;(() => {
    // https://faceapi.herokuapp.com/faces?n=1
// 
    // let xhr = new XMLHttpRequest()
    // xhr.open('GET', 'https://faceapi.herokuapp.com/faces?n=1', false)
    // xhr.send()
    // console.log(xhr.status)
    // ===================

    //Create the XHR Object
    let xhr = new XMLHttpRequest()
    //Call the open function, GET-type of request, url, true-asynchronous
    // xhr.open('GET', 'https://api.github.com/users', true)
    //  xhr.open('GET', 'http://shibe.online/api/shibes?count=4', true)
    // xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
    xhr.open('GET', 'https://aws.random.cat/meow', true)
    //call the onload
    xhr.onload = function() {
      //check if the status is 200(means everything is okay)
      if (this.status === 200) {
        console.log('this.status:\n', this.status)
        //return server response as an object with JSON.parse
        console.log(JSON.parse(this.responseText))
        //  document.write(JSON.parse(this.responseText));
        // let root = document.getElementById('root')
        // root.innerHTML = JSON.parse(this.responseText)
        let obj = JSON.parse(this.responseText)
        // console.log(obj.message)
        console.log(obj.file)
        superZloid.createElement({ id: 'reloadPage', inner: 'get new cat' })

        document.querySelector('#reloadPage').addEventListener('click', ev => {
          document.location.reload(true)
        })

        superZloid.createElement({ tagName: 'img', id: 'imgId' })
        // document.getElementById("imgId").src = obj.message;

        document.getElementById('imgId').setAttribute('src', obj.file)
        document.getElementById('imgId').setAttribute('width', '250')
      }
    }
    //call send
    xhr.send()
    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN
    ///////////////
    let aa
  // })()
}

