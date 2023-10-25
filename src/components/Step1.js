import React, { useEffect, useState} from 'react';
import imgRuels from "./mobile-rules-modal.jpg"
import Swal from 'sweetalert2'
const Step1 = () => {
  const [chosePape,showChoseP] = useState(false);
  const [choseS,showChoseS] = useState(false);
  const [choseR,showChoseR] = useState(false);
const  handelPlayAgain =  ()=>{
  showChoseP(false)
  showChoseS(false)
  showChoseR(false)
}

  let hadeleChoseWhichYouPicked = () =>{
    let pickedSvg = null
if (chosePape == true ){
   pickedSvg = paperSvg 
}
else if (choseS == true) {
   pickedSvg = sciisorsSvg
}
else{
   pickedSvg = rockSvg
}

return pickedSvg

}
  const handleShowRuels = () => {
    Swal.fire({
      html: `<img src=${imgRuels} width="200px" height="300px" alt="Image">`,
      position: 'bottom',
      customClass: {
        container: 'my-container-class',
        popup: 'my-popup-class',
        content: 'my-content-class',
        closeButton: 'my-close-button-class',
        image: 'my-image-class',
      }
    });
  };
  let paperSvg = 
  <svg className='svg-paper' width="300" height="270">
  <ellipse cx="53.189" cy="54.815" fill="#2844c2" rx="53.189" ry="54.815"></ellipse>
  <ellipse cx="53.189" cy="52.385" fill="url(#a)" rx="53.189" ry="52.385"></ellipse>
  <g transform="translate(12.357 12.421)"><ellipse cx="40.832" cy="41.044" fill="#fff" rx="40.832" ry="41.044"></ellipse><path fill="#3b4161" fill-rule="nonzero" d="M56.697 30.417a2.125 2.125 0 00-.904-.146c-.417.03-.755.201-.955.481-1.177 1.666-2.141 4.81-2.919 7.337-.357 1.169-.836 2.733-1.183 3.475-.362-2.08.047-9.697.206-12.63l.002-.047c.11-2.038.125-2.396.1-2.553-.174-1.118-.618-1.852-1.319-2.18-.708-.333-1.629-.186-2.62.417-.497.303-.635 1.345-1.061 6.067l-.002.02c-.235 2.595-.776 8.568-1.441 9.563-.75-1.392-1.784-9.3-2.23-12.722-.312-2.397-.494-3.774-.616-4.19-.257-.87-1.343-1.611-2.418-1.653-.895-.044-1.629.415-1.98 1.214-.655.736-.423 3.179.302 8.964.344 2.754 1.056 8.441.608 9.08-.893-.099-2.427-3.661-4.559-10.592-.598-1.942-.783-2.525-.967-2.78-.362-.891-1.593-1.578-2.696-1.5a2.314 2.314 0 00-.277.036c-.578.116-1.896.653-1.615 3.13.779 3.435 1.624 5.957 2.445 8.405l.016.05c.491 1.465.955 2.85 1.387 4.388 1.016 3.63.621 5.882.616 5.907-.034.232-.105.374-.211.423a.405.405 0 01-.143.033c-.322.023-.805-.193-1.055-.333-.568-1.098-3.4-6.33-5.967-7.055L25.15 41l-.093.008c-.942.09-1.634.45-2.057 1.068-.67.978-.393 2.224-.325 2.474l.038.09c.02.037 2.079 3.825 2.397 5.587.275 1.511 1.696 3.148 2.838 4.464l.047.054c.373.43.695.802.948 1.146 3.316 3.492 8.558 6.428 8.601 6.452.654.487 1.018.958 1.056 1.363a.595.595 0 01-.117.43l-.114.12.725.711 13.832-.98.59-2.73c1.823-7.705 1.442-14.275 1.436-14.319.007-.242.518-2.58.93-4.468l.011-.048c.82-3.763 1.838-8.444 2.034-10.225.085-.761-.398-1.46-1.23-1.779z"></path></g>
  </svg> 
  let sciisorsSvg =<svg className='svg-postion' width="300" height="270">
  <g transform="translate(196)"><ellipse cx="53.686" cy="54.815" fill="#f2a00c" rx="53.686" ry="54.815"></ellipse><ellipse cx="53.686" cy="52.385" fill="url(#b)" rx="53.686" ry="52.385"></ellipse><g transform="translate(12.473 12.421)"><ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044"></ellipse><path fill="#3d4667" fill-rule="nonzero" d="M30.455 40.692l4.451-6.234c-1.85-.307-5.248-.375-8.031 2.397-4.388 4.37-6.165 13.809-6.535 16.093l11.15 11.105c2.008-.17 10.896-1.353 19.46-9.881.09-.184 2.177-1.72.471-3.418-.814-.81-2.162-.796-2.993.033a1.051 1.051 0 01-1.497.015 1.04 1.04 0 01.015-1.49l3.026-3.014c1.538-1.532.089-4.116-2.058-3.495l-2.477 2.112a1.065 1.065 0 01-1.497-.103c-.384-.443-.302-1.114.135-1.492 8.654-7.562 7.39-6.65 12.958-11.848 2.08-1.725-.536-4.776-2.586-3.03L40.978 40.506a1.051 1.051 0 01-1.378-.015c-.445-.383-.455-.934-.164-1.37l9.395-14.545c1.373-1.852-1.33-3.91-2.776-2.042L32.164 41.881a1.05 1.05 0 01-1.47.255 1.02 1.02 0 01-.24-1.444z"></path></g></g>
  </svg> 
let rockSvg = 

<svg className='svg-rock' width="300" height="270">
<g transform="translate(98 160)">
  <ellipse cx="53.686" cy="54.815" fill="red" rx="53.686" ry="54.815"></ellipse>
  <ellipse cx="53.686" cy="52.385" fill="#df3250" rx="53.686" ry="52.385"></ellipse>
  <g transform="translate(12.473 12.421)">
    <ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044"></ellipse>
    <path fill="#3c4262" fill-rule="nonzero" d="M57.179 35.15c-.475-5.997-7.208-5.385-7.208-5.385-2.842-5.01-7.281-1.381-7.281-1.381-3.41-4.911-7.687-.36-7.687-.36-7.373-.796-7.087 5.234-7.087 5.234-.173 1.917 1.04 7.847 1.04 7.847-1.094-3.418-3.467-.581-3.467-.581-2.917 4.502-.721 6.967-.721 6.967 3.947 4.626 12.357 10.18 12.357 10.18 3.046 1.745 1.757 3.3 1.757 3.3l18.42-3.044.424-3.494c2.8-8.472-.547-19.284-.547-19.284z"></path>
  </g>
</g>
</svg>
let svgs = [paperSvg,sciisorsSvg,rockSvg];
const random = svgs.filter((s)=> s !== hadeleChoseWhichYouPicked()).slice(0,1)  

const handelWhoWin = () =>{
  let resu = ""
  if (hadeleChoseWhichYouPicked() === sciisorsSvg && random[0] === rockSvg ) {
     return resu = "YOU LOSE"
  }
  else if (hadeleChoseWhichYouPicked () === sciisorsSvg && random[0] === paperSvg ){
    return resu = "YOU WIN"
  }
  else if (hadeleChoseWhichYouPicked() === paperSvg && random[0] === rockSvg  ){
     return resu = "YOU WIN"
  }
  else if (hadeleChoseWhichYouPicked () === paperSvg && random[0] === sciisorsSvg ) {
    return resu = "YOU LOSE"
  }

  else if (hadeleChoseWhichYouPicked() === rockSvg && random[0] === sciisorsSvg ) {
     return resu = "YOU WIN"
  }
  else if (hadeleChoseWhichYouPicked() === rockSvg && random[0] === paperSvg ){
    return resu = "YOU LOSE"
  }
}




  const chosePaper = () => {
    showChoseP(!chosePape);

    hadeleChoseWhichYouPicked()

  }
  const choseScissors = () => {
    showChoseS(!choseS);

    hadeleChoseWhichYouPicked()
  }
  const choseRock = () => {
    showChoseR(!choseR);
    hadeleChoseWhichYouPicked()
  }




let contentPicked =  <div className='picked-container'>
<div className='you-picked'>
  <h1 className='you-h1'>YOU PICKED</h1>
  {hadeleChoseWhichYouPicked()}
   </div>
   <div className='result'>
  <h1 className='win'>{handelWhoWin()}</h1>
    <button className='btn-play-again' onClick={ () => handelPlayAgain()}>PLAY AGAIN</button>
   </div>
<div className='the-house-picked'>
  <h1 className='house-h1'>THE HOUSE PICKED</h1>
  { chosePape || choseR || choseS ? random : <span className='circyle'></span>}
</div>
</div>



  return (
  

    <>
     <div className='step1'>
      <div className='score-continar'>


        <div className='continar-RPS'>
    <span className='h1-rock'>ROCK<br/>PAPER<br/>SCISSORS</span>
        </div>
      </div>
      {chosePape || choseR || choseS ? contentPicked :
      <div className='svg-continar'> 
      <svg xmlns="http://www.w3.org/2000/svg" width="304" height="270"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="1" stop-color="#4c68f7" stop-opacity="1"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="100%" stop-color="#eba91d" stop-opacity="1"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><ellipse cx="53.189" cy="54.815" fill="#2844c2" rx="53.189" ry="54.815"/><ellipse cx="53.189" cy="52.385" fill="url(#a)" rx="53.189" ry="52.385"/><g transform="translate(12.357 12.421)"><ellipse cx="40.832" cy="41.044" fill="#fff" rx="40.832" ry="41.044"/><path fill="#3b4161" fill-rule="nonzero" d="M56.697 30.417a2.125 2.125 0 00-.904-.146c-.417.03-.755.201-.955.481-1.177 1.666-2.141 4.81-2.919 7.337-.357 1.169-.836 2.733-1.183 3.475-.362-2.08.047-9.697.206-12.63l.002-.047c.11-2.038.125-2.396.1-2.553-.174-1.118-.618-1.852-1.319-2.18-.708-.333-1.629-.186-2.62.417-.497.303-.635 1.345-1.061 6.067l-.002.02c-.235 2.595-.776 8.568-1.441 9.563-.75-1.392-1.784-9.3-2.23-12.722-.312-2.397-.494-3.774-.616-4.19-.257-.87-1.343-1.611-2.418-1.653-.895-.044-1.629.415-1.98 1.214-.655.736-.423 3.179.302 8.964.344 2.754 1.056 8.441.608 9.08-.893-.099-2.427-3.661-4.559-10.592-.598-1.942-.783-2.525-.967-2.78-.362-.891-1.593-1.578-2.696-1.5a2.314 2.314 0 00-.277.036c-.578.116-1.896.653-1.615 3.13.779 3.435 1.624 5.957 2.445 8.405l.016.05c.491 1.465.955 2.85 1.387 4.388 1.016 3.63.621 5.882.616 5.907-.034.232-.105.374-.211.423a.405.405 0 01-.143.033c-.322.023-.805-.193-1.055-.333-.568-1.098-3.4-6.33-5.967-7.055L25.15 41l-.093.008c-.942.09-1.634.45-2.057 1.068-.67.978-.393 2.224-.325 2.474l.038.09c.02.037 2.079 3.825 2.397 5.587.275 1.511 1.696 3.148 2.838 4.464l.047.054c.373.43.695.802.948 1.146 3.316 3.492 8.558 6.428 8.601 6.452.654.487 1.018.958 1.056 1.363a.595.595 0 01-.117.43l-.114.12.725.711 13.832-.98.59-2.73c1.823-7.705 1.442-14.275 1.436-14.319.007-.242.518-2.58.93-4.468l.011-.048c.82-3.763 1.838-8.444 2.034-10.225.085-.761-.398-1.46-1.23-1.779z"/></g><g transform="translate(196)"><ellipse cx="53.686" cy="54.815" fill="#f2a00c" rx="53.686" ry="54.815"/><ellipse cx="53.686" cy="52.385" fill="url(#b)" rx="53.686" ry="52.385"/><g transform="translate(12.473 12.421)"><ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044"/><path fill="#3d4667" fill-rule="nonzero" d="M30.455 40.692l4.451-6.234c-1.85-.307-5.248-.375-8.031 2.397-4.388 4.37-6.165 13.809-6.535 16.093l11.15 11.105c2.008-.17 10.896-1.353 19.46-9.881.09-.184 2.177-1.72.471-3.418-.814-.81-2.162-.796-2.993.033a1.051 1.051 0 01-1.497.015 1.04 1.04 0 01.015-1.49l3.026-3.014c1.538-1.532.089-4.116-2.058-3.495l-2.477 2.112a1.065 1.065 0 01-1.497-.103c-.384-.443-.302-1.114.135-1.492 8.654-7.562 7.39-6.65 12.958-11.848 2.08-1.725-.536-4.776-2.586-3.03L40.978 40.506a1.051 1.051 0 01-1.378-.015c-.445-.383-.455-.934-.164-1.37l9.395-14.545c1.373-1.852-1.33-3.91-2.776-2.042L32.164 41.881a1.05 1.05 0 01-1.47.255 1.02 1.02 0 01-.24-1.444z"/></g></g><g transform="translate(98 160)"><ellipse cx="53.686" cy="54.815" fill="#9d1636" rx="53.686" ry="54.815"/><ellipse cx="53.686" cy="52.385" fill="df3250" rx="53.686" ry="52.385"/><g transform="translate(12.473 12.421)"><ellipse cx="41.214" cy="41.044" fill="#E1E4ED" rx="41.214" ry="41.044"/><path fill="#3c4262" fill-rule="nonzero" d="M57.179 35.15c-.475-5.997-7.208-5.385-7.208-5.385-2.842-5.01-7.281-1.381-7.281-1.381-3.41-4.911-7.687-.36-7.687-.36-7.373-.796-7.087 5.234-7.087 5.234-.173 1.917 1.04 7.847 1.04 7.847-1.094-3.418-3.467-.581-3.467-.581-2.917 4.502-.721 6.967-.721 6.967 3.947 4.626 12.357 10.18 12.357 10.18 3.046 1.745 1.757 3.3 1.757 3.3l18.42-3.044.424-3.494c2.8-8.472-.547-19.284-.547-19.284z"/></g></g><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="13" font-style="condensed" font-weight="bold"><tspan x="134" y="31"></tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="13" font-style="condensed" font-weight="bold"><tspan x="40" y="147"></tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="13" font-style="condensed" font-weight="bold"><tspan x="235" y="147"></tspan></text><g fill="#B1B4C5" transform="matrix(-1 0 0 1 177 39)"><rect width="50" height="4" y="10" rx="2"/><path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"/><path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"/></g><g fill="#B1B4C5" transform="scale(1 -1) rotate(-55 -82.574 -131.195)"><rect width="50" height="4" y="10" rx="2"/><path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"/><path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"/></g><g fill="#B1B4C5" transform="rotate(-55 240.022 -103.651)"><rect width="50" height="4" y="10" rx="2"/><path d="M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"/><path d="M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"/></g></g></svg>
      <button onClick={() => chosePaper()} className='btn-paper'>paper</button>
      <button onClick={()=> choseScissors()} className='btn-scissors'>scissors</button>
      <button onClick={()=> choseRock()} className='btn-rock'>rock</button>
    </div>
      }
      <div> 
        <button className='button-ruels' onClick={()=> handleShowRuels()} >RULES</button>
      </div>
    </div>

    </>
  )
}

export default Step1