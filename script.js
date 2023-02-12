let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient");
let copyButton = document.querySelector("#copy");


function setGradient() {
  console.log(color1.value);
  body.style.background =  'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  
  css.textContent = body.style.background + ";";

  if(css.textContent === ""){
    copyButton.style.display = 'none'; 
  }

}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

copyButton.addEventListener("click", ()=> {
 
  let copyCSS = css.innerText;
  navigator.clipboard.writeText(copyCSS);
  alert("CSS Copied " + copyCSS);
})

