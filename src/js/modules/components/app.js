import * as superZloid from '../scripts/superZloid.js';
export var app = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://aws.random.cat/meow', true);
    xhr.onload = function () {
        if (this.status === 200) {
            console.log('this.status:\n', this.status);
            console.log(JSON.parse(this.responseText));
            var obj = JSON.parse(this.responseText);
            console.log(obj.file);
            superZloid.createElement({ id: 'reloadPage', inner: 'get new cat' });
            document.querySelector('#reloadPage').addEventListener('click', function (ev) {
                document.location.reload(true);
            });
            superZloid.createElement({ tagName: 'img', id: 'imgId' });
            document.getElementById('imgId').setAttribute('src', obj.file);
            document.getElementById('imgId').setAttribute('width', '250');
        }
    };
    xhr.send();
    var aa;
};
