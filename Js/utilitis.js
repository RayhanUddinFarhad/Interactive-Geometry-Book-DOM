function triaAngle (b, h) {


    const area = 0.5 * parseFloat(b) * parseFloat(h);
  return area.toFixed(2);
}


function reactangle (w, l) {


    const area = parseFloat(w) * parseFloat(l);
  return area.toFixed(2);
}



function getValue (id) {
    return document.getElementById(id).value;
}

function containerArea () { 

    return document.getElementById('container-area')
}