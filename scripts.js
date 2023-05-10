const images = ['images/Heat_Pollution_p1.png','images/Heat_Pollution_p2.png','images/Heat_Pollution_p3.png','images/Heat_Pollution_p4.png'];
let index = 0;

images.forEach(preload_img);

window.addEventListener('load', () => {
    document.addEventListener('click', () => {
        next_img();
    }); 
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            next_img();
        }
    });
});

function next_img(){
    if (index < images.length-1) index++;
    else index = 0;
    document.getElementById('img').src = images[index];
}

function preload_img(img){
    console.log(img);
    let img = new Image();
    img.src = img;
}
