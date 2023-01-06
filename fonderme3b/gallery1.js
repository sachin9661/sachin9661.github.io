//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}
var meee1 = document.querySelector('#meee1');
var meee5 = document.querySelector('#meee5');
var meee3 = document.querySelector('#meee3');
var meee4 = document.querySelector('#meee4');
var meee2 = document.querySelector('#meee2');

meee1.addEventListener('mouseenter', function(){
       
        meee1.classList.remove('line11a');
        meee1.classList.add('line112')
        meee2.classList.remove('line12a');
        meee2.classList.add('line152');
        meee3.classList.remove('line13a');
        meee3.classList.add('line152');
        meee4.classList.remove('line14a');
        meee4.classList.add('line152');
        meee5.classList.remove('line15a');
        meee5.classList.add('line152');

})   
meee1.addEventListener('mouseleave', function(){
       
       meee1.classList.add('line11a');
       meee1.classList.remove('line112')
       meee2.classList.add('line12a');
       meee2.classList.remove('line152');
       meee3.classList.add('line13a');
       meee3.classList.remove('line152');
       meee4.classList.add('line14a');
       meee4.classList.remove('line152');
       meee5.classList.add('line15a');
       meee5.classList.remove('line152');

}) 
meee2.addEventListener('mouseenter', function(){
       
       meee1.classList.remove('line11a');
       meee1.classList.add('line152')
       meee2.classList.remove('line12a');
       meee2.classList.add('line112');
       meee3.classList.remove('line13a');
       meee3.classList.add('line152');
       meee4.classList.remove('line14a');
       meee4.classList.add('line152');
       meee5.classList.remove('line15a');
       meee5.classList.add('line152');

})   
meee2.addEventListener('mouseleave', function(){
       
       meee1.classList.add('line11a');
       meee1.classList.remove('line152')
       meee2.classList.add('line12a');
       meee2.classList.remove('line112');
       meee3.classList.add('line13a');
       meee3.classList.remove('line152');
       meee4.classList.add('line14a');
       meee4.classList.remove('line152');
       meee5.classList.add('line15a');
       meee5.classList.remove('line152');

}) 
meee3.addEventListener('mouseenter', function(){
       
       meee1.classList.remove('line11a');
       meee1.classList.add('line152')
       meee2.classList.remove('line12a');
       meee2.classList.add('line152');
       meee3.classList.remove('line13a');
       meee3.classList.add('line112');
       meee4.classList.remove('line14a');
       meee4.classList.add('line152');
       meee5.classList.remove('line15a');
       meee5.classList.add('line152');

})  
meee3.addEventListener('mouseleave', function(){
       
       meee1.classList.add('line11a');
       meee1.classList.remove('line152')
       meee2.classList.add('line12a');
       meee2.classList.remove('line152');
       meee3.classList.add('line13a');
       meee3.classList.remove('line112');
       meee4.classList.add('line14a');
       meee4.classList.remove('line152');
       meee5.classList.add('line15a');
       meee5.classList.remove('line152');

}) 
meee4.addEventListener('mouseenter', function(){
       
       meee1.classList.remove('line11a');
       meee1.classList.add('line152')
       meee2.classList.remove('line12a');
       meee2.classList.add('line152');
       meee3.classList.remove('line13a');
       meee3.classList.add('line152');
       meee4.classList.remove('line14a');
       meee4.classList.add('line112');
       meee5.classList.remove('line15a');
       meee5.classList.add('line152');

})
meee4.addEventListener('mouseleave', function(){
       
       meee1.classList.add('line11a');
       meee1.classList.remove('line152')
       meee2.classList.add('line12a');
       meee2.classList.remove('line152');
       meee3.classList.add('line13a');
       meee3.classList.remove('line152');
       meee4.classList.add('line14a');
       meee4.classList.remove('line112');
       meee5.classList.add('line15a');
       meee5.classList.remove('line152');

}) 
meee5.addEventListener('mouseenter', function(){
       
       meee1.classList.remove('line11a');
       meee1.classList.add('line152')
       meee2.classList.remove('line12a');
       meee2.classList.add('line152');
       meee3.classList.remove('line13a');
       meee3.classList.add('line152');
       meee4.classList.remove('line14a');
       meee4.classList.add('line152');
       meee5.classList.remove('line15a');
       meee5.classList.add('line112');

})
meee5.addEventListener('mouseleave', function(){
       
       meee1.classList.add('line11a');
       meee1.classList.remove('line152')
       meee2.classList.add('line12a');
       meee2.classList.remove('line152');
       meee3.classList.add('line13a');
       meee3.classList.remove('line152');
       meee4.classList.add('line14a');
       meee4.classList.remove('line152');
       meee5.classList.add('line15a');
       meee5.classList.remove('line112');

}) 
 

const mynav=document.querySelector(".mynav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY){
        mynav.classList.add("nav--hidden");
    }
    else {
        mynav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});