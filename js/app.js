const mainImage = document.querySelector('.gallery-image1 img');
const imagesToClick = document.querySelectorAll('.gallery img');

imagesToClick.forEach(img => img.addEventListener('click', changeImage));

function changeImage(e){

    imagesToClick.forEach(img => (img.style.opacity = 1))
    e.target.style.opacity = 0.5;


    console.log(e.target);
    mainImage.src = e.target.src
    
    if(e.target === mainImage){
        mainImage.src = 'img/img1.jpeg';
        e.target.style.opacity = 1;
    }
}