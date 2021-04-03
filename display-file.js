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

  const url = 'https://webhook.site/4b1af943-d13a-4fc8-8302-6f4b76ceb419'
  //const url = 'https://testajax.free.beeceptor.com/testingapi'
  const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const files = document.querySelector('[type=file]').files
  const formData = new FormData()

  alert(files.length);
  for (let i = 0; i < files.length; i++) {
    let file = files[i]
    console.log(file)
    formData.append('fileUploader', file)

  }
  // Log the key/value pairs
for (var pair of formData.entries()) {
  console.log(pair[0] + " - " + pair[1]);
}

//print the formData as Json. add file name as a key if possible
  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    console.log(response)
  })
})
}
