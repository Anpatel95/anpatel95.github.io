var selDiv = "";

document.addEventListener("DOMContentLoaded", init, false);

function init() {
  document.querySelector('#files').addEventListener('change', handleFileSelect, false);
  selDiv = document.querySelector("#selectedFiles");
}

function handleFileSelect(e) {

  if(!e.target.files) return;

  selDiv.innerHTML = "";

  var files = e.target.files;
  for(var i=0; i<files.length; i++) {
    var f = files[i];

    selDiv.innerHTML += f.name + "<br/>";

  }

  const url = 'https://webhook.site/12e6cbe0-b85c-4b73-87a4-2b7f816ad71d'
  //const url = 'https://testajax.free.beeceptor.com/testingapi'
  const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const files = document.querySelector('[type=file]').files
  const formData = new FormData()

  alert(files.length);
  for (let i = 0; i < files.length; i++) {
    let file = files[i]
    formData.append('fileUploader', file)
  }

alert(url);
//print the formData as Json. add file name as a key if possible
  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    console.log(response)
    alert(response)
  })
})
}
