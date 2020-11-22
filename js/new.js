var heading = document.getElementsByClassName('accordion');
var i ;

for ( i = 0 ; i < heading.length ; i++){
    heading[i].addEventListener('click' , function () {
        this.classList.toggle('active');
        var desc = this.nextElementSibling;
       if( desc.style.maxHeight){
           desc.style.maxHeight=null;

       }else{
         desc.style.maxHeight=desc.scrollHeight +"px";
       }
    })
};

const input = document.getElementById('input');
       view = document.getElementById('view');
     input.addEventListener("input",()=>{
     view.innerHTML=input.value 
     });

var i = 0;
let images =["image/1.jpg","image/888.jpg","image/200.jpg","image/999.jpg","image/3.jpg", "image/7.jpg","image/4.jpg"];
let slideshow=()=>{
  document.slideshow.src=images[i];
  if(i<images.length -1){
   i++;
  }else{
    i=0;
  }
  setTimeout("slideshow()",2000);
}
slideshow()