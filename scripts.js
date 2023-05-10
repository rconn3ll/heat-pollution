const images = ['images/Heat_Pollution_p1.png','images/Heat_Pollution_p2.png','images/Heat_Pollution_p3.png','images/Heat_Pollution_p4.png'];
let index = 0;

window.addEventListener('load', () => {
    document.addEventListener('click', () => {
        next_img();
    }); 
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            next_img();
        }
    });
    images.forEach( img => {
        console.log(img);
        new Image().src = img;
    });    
});

function next_img(){
    if (index < images.length-1) index++;
    else index = 0;
    document.getElementById('img').src = images[index];
}
