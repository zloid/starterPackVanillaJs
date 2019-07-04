import * as superZloid from '../scripts/superZloid.js';
export var workWithApi = function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        superZloid.createElement({ tagName: 'img', id: 'imgId' });
        document.getElementById('imgId').setAttribute('src', data.message);
        document.getElementById('imgId').setAttribute('width', '200');
    });
    superZloid.createElement({ id: 'reloadPage', inner: 'get new dog' });
    document
        .querySelector('#reloadPage')
        .addEventListener('click', function (ev) {
        document.location.reload(true);
    });
    var aa;
};
