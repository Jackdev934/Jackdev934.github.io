
/*Exercise Button*/
function exercise1() {
    document.getElementById('imageColumn').style.display = 'block';  // Show the random image exercise
    document.getElementById('exercise2Container').style.display = 'none';  
}

function exercise2() {
    document.getElementById('imageColumn').style.display = 'none';  // Hide the random image exercise
    document.getElementById('exercise2Container').style.display = 'block';
}

//image sizing 
function refreshImage() {
  document.getElementById('randomImage').src = 'https://picsum.photos/200?'+ new Date();
}

//small image
function small() {
  const image = document.getElementById('randomImage');
  document.getElementById(refreshImage);
  image.style.width = '100px';  
  image.style.height = '100px'; 
}

//medium image
function medium() {
  const image = document.getElementById('randomImage');
  document.getElementById(refreshImage);
  image.style.width = '300px'; 
  image.style.height = '300px'; 
}

//large image 
function large() {
  const image = document.getElementById('randomImage');
  document.getElementById(refreshImage);
  image.style.width = '500px'; 
  image.style.height = '500px'; 
}


/*Color Slider */
function changeBackgroundColor() {
  var slider = document.getElementById("boxRange");
  var container = document.getElementById("exercise2Container");
  var color = (slider.value / 100) * 255;
  const messageP = document.getElementById("color-message");

  container.style.backgroundColor = `hsl(${color}, 100%, 50%)`; /*color gradient*/
  let word = "";

  if(color <=  25){
    word = " Hot Colors";
  }
  else if (color >=26 || color <= 99 ){
    word = "Warm colors";
  }
  if (color >= 100){
    word = "Cool colors";
  }
  messageP.innerHTML =`The color area shows ${word}`; /* Use back ticks for these */
}

document.getElementById("boxRange").addEventListener("input", changeBackgroundColor);