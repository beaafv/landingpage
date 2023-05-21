

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  
  document.getElementById("menu-bg").classList.toggle("change-bg");
};



const brideName = document.querySelector(".bride1");

const groomName = document.querySelector(".groom1");

const weddingDate = document.querySelector(".weddingdate1");

const mobileNumber = document.querySelector(".number1");



const submit = document.querySelector(".submit1");

document.querySelector(".bride1").style.textTransform = "capitalize";

document.querySelector(".groom1").style.textTransform = "capitalize";





const submitButton = document.querySelector(".submit1")


function functionSubmit () {


  alert("Form Submited ✅")
  
};


const buttonClick = document.querySelector(".button1");

buttonClick.addEventListener ('click', function changeText() { 
buttonClick.textContent = 'Selected!';
buttonClick.style.boxShadow = '5px 5px black';
buttonClick.style.color= 'green';

});


const buttonClick12 = document.querySelector(".button12");

buttonClick12.addEventListener ('click', function changeText() { 
buttonClick12.textContent = 'Selected!';
buttonClick12.style.boxShadow = '10px 10px black';
buttonClick12.style.color= 'green';

});

const buttonClick123 = document.querySelector(".button123");
const tab1 = document.getElementById(one);
const tab2 = document.getElementById(two);




buttonClick123.addEventListener ('click', function changeText() { 
buttonClick123.textContent = 'Selected!';
buttonClick123.style.boxShadow = '2px 2px green';
buttonClick123.style.color= 'green';

});

const imageZoom = document.querySelector('.image');

imageZoom.addEventListener ('click', function functionImageZoom() {
imageZoom.style.transform= 'rotate(45deg)'
});
