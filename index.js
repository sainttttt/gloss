const setFontSize = (size) => { 
    document.querySelector('body').style.fontSize = `${size}px`;
};

const changeFontSize = (amount = 5) => {
  const size = parseInt(window.getComputedStyle(document.querySelector('body'), null)
    .getPropertyValue('font-size').replace('px')) + amount;
  setFontSize(size);
  localStorage.setItem('fontSize', size);
}

const setFont = (fontName, sizeAdjust) => {

  const fontFam = window.getComputedStyle(document.querySelector('body'), null).getPropertyValue('font-family');
  console.log('hehere');

  if (fontFam.replaceAll('"','')  == fontName) {
    console.log('here')
    return;
  }
  document.querySelector('body').style.fontFamily = fontName;
  localStorage.setItem('fontName', fontName);
  if (sizeAdjust) {
    changeFontSize(sizeAdjust);
  }
}


function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

r(function(){
  const fontName = localStorage.getItem('fontName');
  const size = localStorage.getItem('fontSize');

  if (fontName) { 
    setFont(fontName, false);
    setFontSize(size);
  }

  document.querySelector('body').style.visibility = 'visible';
});
