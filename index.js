const setFontSize = (size) => { 
    document.querySelector('body').style.fontSize = `${size}px`;
};

const reset = () => { 
  localStorage.removeItem('fontName');
  localStorage.removeItem('fontSize');
  setFont('Averia Serif Libre', false);
  setFontSize(50);
};

const changeFontSize = (amount = 5) => {
  const size = parseInt(window.getComputedStyle(document.querySelector('body'), null)
    .getPropertyValue('font-size').replace('px')) + amount;
  setFontSize(size);
  localStorage.setItem('fontSize', size);
}

const setFont = (fontName, sizeAdjust) => {

  localStorage.setItem('fontName', fontName);
  const fontFam = window.getComputedStyle(document.querySelector('body'), null).getPropertyValue('font-family');

  if (fontFam.replaceAll('"','')  == fontName) {
    console.log('here')
    return;
  }
  document.querySelector('body').style.fontFamily = fontName;
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
