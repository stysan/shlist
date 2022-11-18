if (window.document.documentMode) {
  alert('Internet Explorer is no longer supported. You will be redirected to firefox.com now.');
  document.location = "http://firefox.com/";
} else if (typeof 'es8test'.padStart == "undefined") {
  alert('Your browser is obsolete (meaning your browser is from 2016 or older). You will be redirected to firefox.com now.');
  document.location = "http://firefox.com/";
} 
