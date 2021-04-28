var selDiv = "";
let output;
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

  const url = 'https://webhook.site/79148758-8b34-47a6-825e-4df5a640f708'
  //const url = 'https://testajax.free.beeceptor.com/testingapi'
  const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const files = document.querySelector('[type=file]').files
  const formData = new FormData()
  tester(files)
  alert(files.length);
  for (let i = 0; i < files.length; i++) {
    let file = files[i]
    formData.append('fileUploader', file)
  }

//test convert to base64 -test starts
function tester(files){

    function getBase64(file) {
      alert("get Base64")
       var reader = new FileReader();
       var reader2 = new FileReader();

       reader2.onload = function(event) {
          console.log('File content:', event.target.result);
        };
       let tr = reader2.readAsText(file);
       console.log(reader2.result);
       alert();
       reader.readAsDataURL(file);
       reader.onload = function () {
         console.log(reader.result);
         output = reader.result;
         console.log(blobCreationFromURL(output));
       };
       reader.onerror = function (error) {
         console.log('Error: ', error);
       };
       console.log(tr);
    }

    let file1 = files[0]
    getBase64(file1);
}//test ends

function blobCreationFromURL(inputURI) {

        var binaryVal;

        // mime extension extraction
        var inputMIME = inputURI.split(',')[0].split(':')[1].split(';')[0];

        // Extract remaining part of URL and convert it to binary value
        if (inputURI.split(',')[0].indexOf('base64') >= 0)
            binaryVal = atob(inputURI.split(',')[1]);

        // Decoding of base64 encoded string
        else
            binaryVal = unescape(inputURI.split(',')[1]);

        // Computation of new string in which hexadecimal
        // escape sequences are replaced by the character
        // it represents

        // Store the bytes of the string to a typed array
        var blobArray = [];
        for (var index = 0; index < binaryVal.length; index++) {
            blobArray.push(binaryVal.charCodeAt(index));
        }

        return new Blob([blobArray], {
            type: inputMIME
        });
    }



alert(url);
//print the formData as Json. add file name as a key if possible
  fetch(url, {
    method: 'POST',
    body: output,
  }).then((response) => {
    console.log(response)
    alert(response)
  })
})
}
