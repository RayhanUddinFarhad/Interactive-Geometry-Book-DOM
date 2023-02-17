function triaAngle (b, h) {


    const area = 0.5 * parseFloat(b) * parseFloat(h);
  return area.toFixed(2);
}


function reactangle (w, l) {


    const area = parseFloat(w) * parseFloat(l);
  return area.toFixed(2);
}


function Parallelogram (b, h) {


    const area = parseFloat(b) * parseFloat(h);
    return area.toFixed(2);
}


function Rhombus (d1, d2) {

    const area = 0.5* parseFloat(d1) * parseFloat(d2);
    return area.toFixed(2);
 }


 function pentagon (p, b) {
    const area = 0.5 * parseFloat(p) * parseFloat(b);
    return area.toFixed(2);


 }


 function ellepse (a, b) {

    const area = 3.14 * parseFloat(a) * parseFloat (b)
    return area.toFixed(2);
 }


 function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  


function getValue (id) {
    return document.getElementById(id).value;
}

function containerArea () { 

    return document.getElementById('container-area')
}