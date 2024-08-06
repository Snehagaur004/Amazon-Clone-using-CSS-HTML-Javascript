//TO MAKE LEFT RIGHT scroll BUTTON OF CAROUSEL 
const r_button=document.getElementById("right-b");
r_button.onclick =() =>{
    document.getElementById("prd-slide").scrollLeft +=1120;
};

const l_button=document.getElementById("left-b");
l_button.onclick =() =>{
    document.getElementById("prd-slide").scrollLeft -=1120;
};

            //   2nd way TO MAKE LEFT RIGHT scroll BUTTON OF CAROUSEL 
// const leftbtn= document.querySelector('.l-btn');
// const rightbtn= document.querySelector('.r-btn');

// rightbtn.addEventListener('click',function(event){
//     console.log("done");
//     const conent=document.querySelector('.product-slide');
//     conent.scrollLeft +=1300;
//     event.preventDefault();
// });

// leftbtn.addEventListener('click',function(event){
//     console.log("done");
//     const conent=document.querySelector('.product-slide');
//     conent.scrollLeft -=1300;
//     event.preventDefault();
// });







