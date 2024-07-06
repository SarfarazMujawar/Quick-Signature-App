

const fontcolor = document.getElementById('colorpicker');
const bgcolor = document.getElementById('bgpicker');
const fontSize = document.getElementById('font-size');
const clrbtn = document.getElementById('clearButton');
const svbtn = document.getElementById('saveButton');

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('mycanvas');






const cnx = canvas.getContext('2d');
console.log(cnx)


fontcolor.addEventListener('change',(event)=>{
    cnx.fillStyle=event.target.value;
    cnx.strokeStyle=event.target.value;
})
bgcolor.addEventListener('change',(event)=>{
    cnx.fillStyle=event.target.value;
    cnx.fillRect(0, 0, 900, 450);
});

canvas.addEventListener('mousedown', (event) => {
     isDrawing = true;
     lastX = event.offsetX;
     lastY = event.offsetY;
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        cnx.beginPath();
        cnx.moveTo(lastX, lastY);
        cnx.lineTo(event.offsetX, event.offsetY);
        cnx.stroke();

         lastX = event.offsetX;
         lastY = event.offsetY;
    }
})
canvas.addEventListener('contextmenu',(event)=>{
    event.preventDefault();
})
canvas.addEventListener('mouseup',()=>{
    isDrawing = false;
})

fontSize.addEventListener('change',(event)=>{
    cnx.lineWidth= event.target.value;
})
clrbtn.addEventListener('click',()=>{
    cnx.clearRect(0,0,canvas.width,canvas.width);
})
svbtn.addEventListener('click',()=>{
    let link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'my-sign.png';
    link.click();

})

