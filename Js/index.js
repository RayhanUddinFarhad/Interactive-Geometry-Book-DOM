// function Traiangle (b, h) {

//     const b = document.getElementById ('triangle-b').value;
//     const h = document.getElementById ('triangle-h').value;

//     const result = 0.5 * parseFloat (b) * parseFloat (h);

//     console.log (result);




// }



let count = 0;



document.getElementById('calculate-triangle').addEventListener('click', function (e) {

    count = count + 1;


    const b = document.getElementById('triangle-b').value;
    const h = document.getElementById('triangle-h').value;





    if (b.trim  () === '' || h.trim () === '' || b <0 || h<0 || isNaN(b) || isNaN(h) )  {


        alert ('Enter valid number')

    }

    else {

        const result = 0.5 * parseFloat(b) * parseFloat(h);
        const container = document.getElementById ('container-area')
    
        const assign = document.createElement('div');
    
    
        assign.innerHTML = `
    
        <div  class="flex  space-x-5 text-sm p-2">
    
        <p>${count}</p>
                            <p>Triangle</p>
                            <p><span>${result}</span>cm<sup>2</sup></p>
                            <button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>
    
        
        
        
        
        
    
    
                            </div>
    
                            `
    
    
        ;

        container.appendChild(assign);

    
    }

    // const result = 0.5 * parseFloat(b) * parseFloat(h);
    // const container = document.getElementById ('container-area')

    // const assign = document.createElement('div');


    // assign.innerHTML = `

    // <div  class="flex  space-x-5 text-sm p-2">

    // <p>${count}</p>
    //                     <p>Triangle</p>
    //                     <p><span>${result}</span>cm<sup>2</sup></p>
    //                     <button style="font-size: 11px;"  class="text-sm bg-[#1090D8] text-white px-1">convert to m<sup>2</sup></button>

    
    
    
    
    


    //                     </div>

    //                     `


    // ;











})






// const buttons = document.querySelectorAll('.calculate');

// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         this.disabled = true;

//         count = count + 1;

//         const players = e.target.parentNode.parentNode;

//         const playerName = players.querySelector('.card-title').innerText;

//         const container = document.createElement('div');

//         container.innerHTML = `<p>${count} <span>${playerName}</span></p>`;

//         const nameContainer = document.getElementById('name-container');

//         nameContainer.appendChild(container);
//         document.getElementById ('btn-calculate').removeAttribute ('disabled');
//     });
// });