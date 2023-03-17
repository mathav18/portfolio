function category(val){
      

    let element=document.querySelectorAll('.moon');
   
    for(let i=0;i<element.length;i++){
        element[i].style.color="#fff";
        element[i].style.textDecoration="none"
        if(i==val){
            element[i].style.color="#fff";
            element[i].style.textDecoration="underline"
        }
    }
   
}

category(0);
//top navbar function
function nav(val){
      

    let element=document.querySelectorAll('.moon');
    console.log(element)
    for(let i=0;i<element.length;i++){
        element[i].style.color="#fff";
        element[i].style.textDecoration="none"
        if(i==val){
            console.log()
            element[i].style.color="#fff";
            element[i].style.textDecoration="underline"
        }
    }
}
nav(0);

//scroll function


//filter function







function show(e){
    
   let child=e.children[0];
  
      $(child).slideToggle("fast");
   
}


function hide(e){
    
    let child=e.children[0];
   
       $(child).slideToggle("fast");
    
 }

//SCROLL FUNCTION 
function projecgt__div__scroll(){
    
    let scrollLength=$(".feed").scrollTop();
  
    if(scrollLength>0&&scrollLength<950){
        category(0);
    }

    if(scrollLength>900&&scrollLength<1800){
        category(1);
    }

    if(scrollLength>1800&&scrollLength<2750){
        category(2);
    }
    if(scrollLength>2750&&scrollLength<7500){
        category(3);
        }

        if(scrollLength>7500){
            category(4);
            }
}





