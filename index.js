function setTheme(themeName, size) {
    localStorage.setItem('theme', themeName);
    localStorage.setItem('size', size);
    document.querySelector('body').className = themeName;
    document.querySelector('body').style = size + "px";
}

const setFontSize = (size) => { 
    localStorage.setItem('size', size);
    console.log('size', size);
    document.querySelector('body').style.fontSize = `${size}px`;
};

const increaseFont = (amount = 5) => {
  const size = parseInt(window.getComputedStyle(document.querySelector('body'), null)
    .getPropertyValue('font-size').replace('px'));
  setFontSize(size + amount);
}

const decrease = (amount = 5) => {
  const size = parseInt(window.getComputedStyle(document.querySelector('body'), null)
    .getPropertyValue('font-size').replace('px'));
  setFontSize(size - amount);
}


const setFont = (fontName, sizeAdjust) => {
  const fontFam = window.getComputedStyle(document.querySelector('body'), null).getPropertyValue('font-family');
  console.log('hehere');

  if (fontFam.replaceAll('"','')  == fontName) {
    console.log('here')
    return;
  }
  document.querySelector('body').style.fontFamily = fontName;
  increaseFont(sizeAdjust);
}



const setPixelFont = () => {
  const pixelFontName = "xe Dogma";
  const fontFam = window.getComputedStyle(document.querySelector('body'), null).getPropertyValue('font-family');
  console.log('hehere');

  if (fontFam.replaceAll('"','')  == pixelFontName) {
    console.log('here')

    return;
  }
  document.querySelector('body').style.fontFamily = pixelFontName;
  increaseFont(40);
}


function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

r(function(){
  const theme = localStorage.getItem('theme');
  const size = localStorage.getItem('size');
  console.log('foo', theme);
  if (theme) { 
    setTheme(theme, size);
  }
});
