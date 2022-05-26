import React, { Component } from 'react';
import { render } from 'react-dom';
// var RarArchive = require("rarjs/dist/rar");
// import { Unzipper } from '@codedread/bitjs/archive/archive.js';
// var Unrar = require('node-unrar');
// var JSZip = require("jszip");
import { fullArchive } from 'node-7z-archive';

//-------node-7z------//

    // import sevenBin from '7zip-bin'
    // import { extractFull } from './node-7z'

    // const pathTo7zip = sevenBin.path7za

//-------node-7z------//

//------libarchive.js--------//

    // import {Archive} from 'libarchive.js/main.js';

    // Archive.init({
    //     // workerUrl: '/libarchive.js/dist/worker-bundle.js'
    //     workerUrl: new Worker(new URL('./worker_bundle.js', import.meta.url)),
    // //     workerUrl: new Worker("/libar/chive.js/dist/worker-bundle.js"),
    // });
// 
//------libarchive.js--------//


 const onMyfileChange = async (fileInput) => {
  if(fileInput.target.files[0] == undefined) {
      return ;
  }

  fullArchive(fileInput.target.files[0], './' /* 7z options/switches */)
// Equivalent to `on('data', function (files) { // ... });`
.progress(function (files) {
  console.log('Some files are extracted: %s', files);
})

//-------node-7z------//

      // const seven = extractFull(fileInput.target.files[0], './', {
      //   $bin: pathTo7zip
      // })

  //-------node-7z------//

console.log(seven)
//-------rarjs--------//
      // var archive = RarArchive(fileInput.target.files[0], function(err) {
      //   if(err) {
      //       // An error occurred (not a rar, read error, etc)
      //       console.log(err)
      //   }
      //   // Use archive
      //   console.log(archive.entries)
      // });

  //-------rarjs--------//


//------JSZip------------

    //   var filename = fileInput.target.files[0].name;
    //   var reader = new FileReader();
    //   reader.onload = function(ev) {
    //     JSZip.loadAsync(ev.target.result).then(function(zip) {
    //         console.log(zip)
    //     }).catch(function(err) {
    //         console.error("Failed to open", filename, " as ZIP file");
    //     })
    // };
    // reader.onerror = function(err) {
    //     console.error("Failed to read file", err);
    // }
    //   reader.readAsArrayBuffer(fileInput.target.files[0]);

//------JSZip------------


//------libarchive.js--------//
    // const file = fileInput.target.files[0];
    //   const archive = await Archive.open(file);
    //   let obj = await archive.extractFiles();

    //   console.log(obj);

//------libarchive.js--------//


//------codedread/bitjs--------//

    // const unzipper = new Unzipper(fileInput.target.files);
    // //   unzipper.addEventListener('progress', updateProgress);
    // // unzipper.addEventListener('extract', receiveOneFile);
    // unzipper.addEventListener('finish', displayZipContents);
    // unzipper.start();

    // function displayZipContents() {
    //   // Now sort your received files and show them or whatever...
    // }

    // console.log(displayZipContents())

//------codedread/bitjs--------//

}

 const App  = () =>(
      <div>
			<input type="file" name="file" onChange={onMyfileChange} />
        <div id="fetch"></div>
      </div>
    );
 

render(<App />, document.getElementById('root'));
