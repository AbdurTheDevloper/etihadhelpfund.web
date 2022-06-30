let cardBtn = document.getElementById('card-btn');
let moreCardWapper = document.getElementById('more-card-wrapper');

cardBtn.addEventListener('click', function(){
    if( moreCardWapper.style.display == 'block'){
        moreCardWapper.style.display = 'none';
        cardBtn.style.transform = 'rotate(0deg)';   
    }else{
        moreCardWapper.style.display = 'block'
        cardBtn.style.transform = 'rotate(180deg)';  
    }
   
})

////   iamge gallay with donner profile picture 

let proImg = document.querySelectorAll('.profile-img');
let fullImg = document.querySelector('.fullImg');
let fullIgWrap = document.querySelector('.full-img-wapper');

let closeFullImg = document.querySelector(".close-full-img");

for(let i=0; i<proImg.length; i++){
 proImg[i].addEventListener('click', function(){
     let result = this.src;
     fullImg.src = result;
     fullIgWrap.style.display = 'flex';
 })
   
};

//// clsoe btn 
closeFullImg.addEventListener('click', function(){
    fullIgWrap.style.display= 'none';
})


