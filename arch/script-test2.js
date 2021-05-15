
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
e.preventDefault()
alert("test complete")
      //main thread
      var fileUploadWorker = new Worker("fileReaderWorker.js");
      var base64 = '';
      fileUploadWorker.postMessage(file);
      fileUploadWorker.onmessage = function(z) {

       if (z.data[0]) {
          var fileContent=btoa(base64);// File Read Completes
        //invoke API


       } else {
          base64 += z.data[2];
          var val = (z.data[1] / file.size);
          console.log("Read Completed:" + (val * 100).toFixed(2) + '%');
       }
      };
      alert("script 2");
}

function uploadFile() {
 // Check for the various File API support.
 if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
      alert('The File APIs are not fully supported in this browser.');
 }

 var fileContent;
 var reader = new FileReader();
 reader.onload = function() {
      binaryFileData = reader.result;
      var bytes = new Uint8Array(reader.result), binary = "";
      var length = bytes.byteLength;

      for (var i = 0; i < length; i++) {
       binary += String.fromCharCode(bytes[i]);
      }

      fileContent = btoa(binary);

      var data = {
       file : fileContent
      };

      $.post("https://api.jquery.com/jquery.post/", function(data) {
      });
         };
         reader.readAsArrayBuffer(document.getElementById("files").files[0]);
 }
