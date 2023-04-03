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


//filter
let reactArr=[
    {
        'title':'Myteam Website',
        'img':'myteam.png',
       
        'link':'https://enchanting-biscochitos-a212cc.netlify.app/'
    },
    {
        'title':'Country Details',
        'img':'counrty.jpeg',
        'link':'https://chipper-squirrel-2e0c23.netlify.app/'
    },
    {
        'title':'Weather App',
        'img':'wether.webp',
        'link':'https://boisterous-alfajores-a7da48.netlify.app/'
    }
]

let HtmlArr=[
    {
        'title':'formula',
        'img':'formula.png',
        'link':'https://html-9.mathavanc.repl.co/'
    },
    {
        'title':'Product preview card',
        'img':'productPreview.png',
        'link':'https://card.mathavanc.repl.co/'
    },
    {
        'title':'3 card',
        'img':'card.png',
        'link':'https://assignment-7.mathavanc.repl.co/'
    },
    {
        'title':'Suite landing page',
        'img':'suit.png',
        'link':'https://js-12.mathavanc.repl.co/'
    },
]

let jsArr=[
    {
        'title':'Job List',
        'img':'folio-1.jpg',
        'link':'https://dazzling-sprinkles-eab379.netlify.app'

    },
    {
        'title':'Color Hunt',
        'img':'colorhunt.jpg',
        'link':'https://color-popular.mathavanc.repl.co/'
    },
    {
        'title':'PassWord Generator',
        'img':'password.jpg',
        'link':'https://symphonious-valkyrie-501f59.netlify.app'
    },
    {
        'title':'Tip Calculator',
        'img':'tipcalc.jpg',
        'link':'https://tip-calculator.mathavanc.repl.co/'
    },

]

let apiArr=[
    {
        'title':'URL Sortet',
        'img':'URLshortener.jpg',
        'link':'https://ornate-wisp-26294e.netlify.app'
    },
    {
        'title':'GitHup Details',
        'img':'git.jpg',
        'link':'https://thunderous-frangipane-ed5be3.netlify.app/'
    },
    {
        'title':'Country Details',
        'img':'counrty.jpeg',
        'link':'https://chipper-squirrel-2e0c23.netlify.app/'
    },
    {
        'title':'Weather App',
        'img':'wether.webp',
        'link':'https://boisterous-alfajores-a7da48.netlify.app/'
    }
]




projectFilter()
function projectFilter(e){
    let arr=[];
    let eleArr=document.querySelectorAll('.fil');

    for(let i of eleArr){
        i.style.background='none';
        i.style.color='#787878';
        if(i==e){
            i.style.background='#787878';
            i.style.color='white';
            console.log(e)
        }
    }
    if(e==undefined){
        eleArr[0].style.background='#787878';
        eleArr[0].style.color='white';
        arr=reactArr
        filter(arr)
        return"";
    }

    if(e.innerText=='REACT JS'||e==undefined){
        arr=reactArr
    }
    if(e.innerText=='HTML/CSS'){
        arr=HtmlArr
    }
    if(e.innerText=='VANILLA JS'){
        arr=jsArr
    }
    if(e.innerText=='API'){
        arr=apiArr
    }
   filter(arr)
}


function filter(arr){
    let parent=document.querySelector('.divArea');
parent.innerHTML="";
    for(let i=0;i<arr.length;i++){
             parent.innerHTML+=` <div class="project__temPlate" style=background-Image:url('${arr[i].img}')>
             <div class="dropdown">
                 <div class="drop">
                 <h3>${arr[i].title}</h3>
                <a href='${arr[i].link}' target=blank><button class="button-66">View</button></a>
                 
             </div>
             </div>
         </div>`
       
    }
   
}