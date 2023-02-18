


// It will count the number of area calculator

let count = 0;


// started calculate Triangle area
document.getElementById('calculate-triangle').addEventListener('click', function (e) {



    const b = getValue('triangle-b');
    const h = getValue('triangle-h');





    if (b.trim() === '' || h.trim() === '' || b < 0 || h < 0 || isNaN(b) || isNaN(h)) {


        alert('Enter valid number')

    }

    else {
        count = count + 1;



        const result = CalculationSystem1(b, h)
        const container = containerArea()

        const assign = document.createElement('tr');


        assign.innerHTML = `
    
        <th>${count}.</th>
        <td>Triangle</td>

        <td>${result}cm<sup>2</sup></td>
        <td><button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>
        </td>
    
                            `


            ;

        container.appendChild(assign);


    }












})


// Start the Reactangle area calculation




document.getElementById('calculate-rectangle').addEventListener('click', function (e) {



    const w = getValue('reactangle-w');
    const l = getValue('reactangle-l');





    if (w.trim() === '' || l.trim() === '' || w < 0 || l < 0 || isNaN(w) || isNaN(l)) {


        alert('Enter valid number')

    }

    else {
        count = count + 1;



        const result = CalculationSystem2(w, l)
        const container = containerArea()

        const assign = document.createElement('tr');


        assign.innerHTML = `
    
        <th>${count}.</th>
        <td>Rectangle</td>

        <td>${result}cm<sup>2</sup></td>
        <td><button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>
        </td>
    
                            `


            ;

        container.appendChild(assign);


    }












})

//Start the Parallelogram area calculation


document.getElementById('calculate-paralle').addEventListener('click', function (e) {



    const b = getValue('paralle-b');
    const h = getValue('paralle-h');





    if (b.trim() === '' || h.trim() === '' || b < 0 || h < 0 || isNaN(b) || isNaN(h)) {


        alert('Enter valid number')

    }

    else {
        count = count + 1;



        const result = CalculationSystem2(b, h)
        const container = containerArea()

        const assign = document.createElement('tr');


        assign.innerHTML = `
    
        <th>${count}.</th>
        <td>Parallelogram</td>

        <td>${result}cm<sup>2</sup></td>
        <td><button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>
        </td>
    
                            `


            ;

        container.appendChild(assign);


    }












})


// //Start the Rhombus
//  area calculation

document.getElementById('calculate-rhomb').addEventListener('click', function (e) {



    const d1 = getValue('Rhomb-d1');
    const d2 = getValue('Rhomb-d2');





    if (d1.trim() === '' || d2.trim() === '' || d1 < 0 || d2 < 0 || isNaN(d1) || isNaN(d2)) {


        alert('Enter valid number')

    }

    else {
        count = count + 1;



        const result = CalculationSystem1(d1, d2)
        const container = containerArea()

        const assign = document.createElement('tr');


        assign.innerHTML = `
    
        <th>${count}.</th>
        <td>Rhombus</td>

        <td>${result}cm<sup>2</sup></td>
        <td><button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>
        </td>
    
                            `


            ;

        container.appendChild(assign);


    }












})


//Start the Pentagon area calculation
document.getElementById('calculate-pentagon').addEventListener('click', function (e) {



    const p = getValue('pentagon-p');
    const b = getValue('pentagon-b');





    if (p.trim() === '' || b.trim() === '' || p < 0 || b < 0 || isNaN(p) || isNaN(b)) {


        alert('Enter valid number')

    }

    else {
        count = count + 1;



        const result = CalculationSystem1(p, b)
        const container = containerArea()

        const assign = document.createElement('tr');


        assign.innerHTML = `
    
        <th>${count}.</th>
        <td>Pentagon</td>

        <td>${result}cm<sup>2</sup></td>
        <td><button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>
        </td>
    
                            `


            ;

        container.appendChild(assign);



    }












})



//Start the Ellipse area calculation
document.getElementById('calculate-elep').addEventListener('click', function (e) {



    const a = getValue('ellep-a');
    const b = getValue('ellep-b');





    if (a.trim() === '' || b.trim() === '' || a < 0 || b < 0 || isNaN(a) || isNaN(b)) {


        alert('Enter valid number')

    }

    else {
        count = count + 1;



        const result = ellepse(a, b)
        const container = containerArea()

        const assign = document.createElement('tr');


        assign.innerHTML = `
    
        <th>${count}.</th>
        <td >Ellipse</td>

        <td>${result}cm<sup>2</sup></td>
        <td><button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>
        </td>
    
                            `


            ;

        container.appendChild(assign);

    }












})



//That will take into another page


document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
})




//This is Random color making area


const cards = document.querySelectorAll('.card1');


for (const card of cards) {
    card.addEventListener('mouseover', function () {
        const color = getRandomColor();
        card.style.backgroundColor = color;
    });
    card.addEventListener('mouseout', function () {
        card.style.backgroundColor = 'white';
    });
};






















