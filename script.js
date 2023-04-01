let box = document.getElementById('box');

document.addEventListener('keydown', function(event){
   eventController(event.keyCode);
})


function eventController(keyCode){

    switch(keyCode)
    {
        case 38:
           console.log('up');
           box.style.top = box.offsetTop - 10 + 'px';
           break;
        case 40:
           console.log('down');
           box.style.top = box.offsetTop + 10 + 'px';
           break;
        case 39:
           console.log('right');
           box.style.left = box.offsetLeft + 10 + 'px';
           break;
        case 37:
            console.log('left');
            box.style.left = box.offsetLeft - 10 + 'px';
            break;
    }

}