(function() {

var f = document.getElementById('files');

if (f.files.length)
  processFile();

f.addEventListener('change', processFile, false);


function processFile(e) {
  var file = f.files[0];
  var size = file.size;
  var sliceSize = 2000000;
  var start = 0;

  setTimeout(loop, 1);

  function loop() {
    var end = start + sliceSize;

    if (size - end < 0) {
      end = size;
    }
    alert(f.files[0].name);
    var s = slice(file, start, end);

    send(s, start, end);

    if (end < size) {
      start += sliceSize;
      setTimeout(loop, 1);
    }
  }
}


function send(piece, start, end) {
  var formdata = new FormData();
  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://webhook.site/79148758-8b34-47a6-825e-4df5a640f708', true);

  const url = 'https://webhook.site/79148758-8b34-47a6-825e-4df5a640f708'
  formdata.append('start', start);
  formdata.append('end', end);
  formdata.append('file', piece);
  alert("script - test");

  fetch(url, {
    method: 'POST',
    body: formdata,
  }).then((response) => {
    console.log(response)
    alert(response)
  })

  //xhr.send(formdata);
}

/**
 * Formalize file.slice
 */

function slice(file, start, end) {
  var slice = file.mozSlice ? file.mozSlice :
              file.webkitSlice ? file.webkitSlice :
              file.slice ? file.slice : noop;

  return slice.bind(file)(start, end);
}

function noop() {

}

})();
