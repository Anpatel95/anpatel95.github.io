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

  const url = 'https://webhook.site/71e4b9c0-9d3b-4450-baa0-17f68686dc5d'
  const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const files = document.querySelector('[type=file]').files
  const formData = new FormData()

  for (let i = 0; i < files.length; i++) {
    let file = files[i]

    formData.append('fileUploader', file)
  }

  alert(formData);
  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    console.log(response)
  })
})
}