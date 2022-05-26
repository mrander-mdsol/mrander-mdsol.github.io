import React, { Component } from 'react';
import { render } from 'react-dom';
var RarArchive = require("./rarjs/dist/rar");
var JSZip = require("jszip");

 const onMyfileChange = (fileInput) => {
   var count = 0;
  Object.values(fileInput.target.files).map(file=>{
    if(file === undefined) {
      console.log('Invalid file :',file.name) ;
      return;
    }

    if(file.name.endsWith('zip')){
      count++;
          var filename = file.name;
          var reader = new FileReader();
          reader.onload = function(ev) {
            JSZip.loadAsync(ev.target.result).then(function(zip) {
                console.log(zip.files)
            }).catch(function(err) {
                console.error("Failed to open", filename, " as ZIP file");
            })
        };
        reader.onerror = function(err) {
            console.error("Failed to read file", err);
        }
          reader.readAsArrayBuffer(file);
    }

    else if(file.name.endsWith('rar')){
      count++;
      var archive = RarArchive(file, function(err) {
        if(err) {
            // An error occurred (not a rar, read error, etc)
            console.log(err)
        }
        // Use archive
        console.log(archive.entries)
      });
    }

    else {
      console.log('Invalid file :',file.name) ;
    }
  })
  // GET THE FILE INPUT.
  var fi = document.getElementById('file');

  // VALIDATE OR CHECK IF ANY FILE IS SELECTED.

      // THE TOTAL FILE COUNT.
      document.getElementById('fp').innerHTML =
          'Total valid files: <b>' + count + '</b></br >';

      // RUN A LOOP TO CHECK EACH SELECTED FILE.
      for (var i = 0; i <= fi.files.length - 1; i++) {
        if(fi.files.item(i).name.endsWith('rar') || fi.files.item(i).name.endsWith('zip')){
          var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.
          var fsize = fi.files.item(i).size;      // THE SIZE OF THE FILE.

          // SHOW THE EXTRACTED DETAILS OF THE FILE.
          document.getElementById('fp').innerHTML =
              document.getElementById('fp').innerHTML + '<br /> ' +
                  fname + ' (<b>' + fsize + '</b> bytes)';
      }
    }
  }

 const App  = () =>(
      <div>
        <h3>React zip/rar file reader</h3>
			<input type="file" name="file" id='file' multiple onChange={onMyfileChange} />
    <p id="fp"></p>
        <div id="fetch"></div>
      </div>
    );
 

render(<App />, document.getElementById('root'));
