//For Triangle, Rhombus, pentagon calculation

function CalculationSystem1(b, h) {


  const area = 0.5 * parseFloat(b) * parseFloat(h);
  return area.toFixed(2);
}

//For Rectangle, Parallelogram calculation

function CalculationSystem2(w, l) {


  const area = parseFloat(w) * parseFloat(l);
  return area.toFixed(2);
}



//For ellepse calculation


function ellepse(a, b) {

  const area = 3.14 * parseFloat(a) * parseFloat(b)
  return area.toFixed(2);
}


//For make Random hover background


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



//Get  all input area value

function getValue(id) {
  return document.getElementById(id).value;
}


//Get  container area of  Table

function containerArea() {

  return document.getElementById('container-area')
}