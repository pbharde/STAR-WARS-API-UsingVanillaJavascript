let character = document.getElementById('character');
let vehicle = document.getElementById('vehicle');
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];
let btn1 = document.getElementById('page1');
let btn2 = document.getElementById('page2');
let btn3 = document.getElementById('page3');
let btn4 = document.getElementById('page4');
let btn5 = document.getElementById('page5');
let btn6 = document.getElementById('page6');
let btn7 = document.getElementById('page7');
let btn8 = document.getElementById('page8');
let btn9 = document.getElementById('page9');

function myFunction() {
    axios.get('https://swapi.co/api/people').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "#FFD700";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page1() {
    character.innerHTML = "";
    axios.get('https://swapi.co/api/people').then(function(response){
      display(response.data);
    })


    btn1.style.backgroundColor = "#FFD700";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page2() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=2').then(function(response){
      display(response.data);
    })

    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "#FFD700";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page3() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=3').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "#FFD700";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page4() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=4').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "#FFD700";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page5() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=5').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "#FFD700";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page6() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=6').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "#FFD700";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page7() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=7').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "#FFD700";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "";
}

function page8() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=8').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "#FFD700";
    btn9.style.backgroundColor = "";
}

function page9() {
  character.innerHTML = "";
    axios.get('https://swapi.co/api/people/?page=9').then(function(response){
      display(response.data);
    })
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    btn4.style.backgroundColor = "";
    btn5.style.backgroundColor = "";
    btn6.style.backgroundColor = "";
    btn7.style.backgroundColor = "";
    btn8.style.backgroundColor = "";
    btn9.style.backgroundColor = "#FFD700";
}

function display(data){
  console.log(data);
  console.log(data.results);
  for(let i=0; i<data.results.length; i++){
    let btn = document.createElement("BUTTON");
    let characterList = "<li>" + data.results[i].name + "<br/>Gender: " + data.results[i].gender + "<br/>Height: " + data.results[i].height + "<br/>Mass: " + data.results[i].mass + "<br/>Hair Color: " + data.results[i].hair_color + "<br/>Skin Color: " + data.results[i].skin_color + "<br/>Eye Color: " + data.results[i].eye_color + "<br/>Birth Year: " + data.results[i].birth_year + "<button class='button' onClick='openModal()'>View Vehicle</button></li>";
    character.innerHTML += characterList;
  }
}

function openModal(x){
//  modal.style.display = "block";
  //let vehicleList = "<li>" + data.results[0].name + "</li>";
  //vehicle.innerHTML += vehicleList;
  //let item = this;
//  let parent =item.parentNode;
console.log(x);
  alert(x);

  // console.log("response");
  // axios.get('https://swapi.co/api/people').then(function(response){
  //   alert(response.data.results[0].name);
  // })

}

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
