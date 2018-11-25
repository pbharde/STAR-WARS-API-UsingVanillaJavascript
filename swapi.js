let current = document.getElementsByClassName("active");
let view = document.querySelector("#character");
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
var defaultView = "grid";

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
    console.log(current[0].lastChild);
    console.log(current[1].lastChild);
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
    console.log(current[0].lastChild.data);
    if(current[0].lastChild.data===List)
    listView();
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
    if(current[0].lastChild.data===List)
    listView();
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
  for(let i=0; i<data.results.length; i++){
    let btn = document.createElement("BUTTON");
    let characterList = "<li id='info'><div class='hide'>"+ data.results[i].url +"</div><div class='name'>" + data.results[i].name + "</div><div>Gender: " + data.results[i].gender + "</div><div>Height: " + data.results[i].height + "</div><div>Mass: " + data.results[i].mass + "</div><div>Hair Color: " + data.results[i].hair_color + "</div><div>Skin Color: " + data.results[i].skin_color + "</div><div>Eye Color: " + data.results[i].eye_color + "</div><div>Birth Year: " + data.results[i].birth_year + "</div><button class='button' onClick='openModal(this)' <div>View Vehicle</button></li>";
    character.innerHTML += characterList;
  }
}

function openModal(char){
let selectedCharacter = char.parentElement.firstChild.firstChild;
modal.style.display = "block";
axios.get(selectedCharacter.data).then(function(response){
        let vehicleList = "<li>" + response.data.name + "'s Vehicle:<br/><br/></li>";
        vehicle.innerHTML = vehicleList;
         if(response.data.vehicles.length==0){
          let vehicleList = "<li> Vehicle information not available.</li>";
          vehicle.innerHTML += vehicleList;
        }
        else{
          for(let j=0; j<response.data.vehicles.length; j++){
              axios.get(response.data.vehicles[j]).then(function(responseVeh){
                let vehicleList = "<li>" + responseVeh.data.name + "</li>";
                vehicle.innerHTML += vehicleList;
            })
          }
        }
})
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


// List View
function listView(data) {
  view.classList.remove('grid');
  view.classList.add('list');
  console.log(view.children.length);
  for(let i=0; i<view.children.length; i++){
    view.children[i].classList.remove('gridViewApp');
    view.children[i].classList.add('listViewApp');
  }
}
// Grid View1
function gridView() {
  view.classList.remove('list');
  view.classList.add('grid');
  for(let i=0; i<view.children.length; i++){
    //view.children[i].classList.remove('listViewApp');
    view.children[i].classList.add('gridViewApp')
  }
  }



/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("viewBtnContainer");
var btns = container.getElementsByClassName("viewBtn");
var button = container.getElementsByClassName("button");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
  }
