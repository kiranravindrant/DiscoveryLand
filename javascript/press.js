window.addEventListener("DOMContentLoaded",function(){  

    
    let heading=document.getElementById("heading")
    let para=document.getElementById("para")
    let leftarrow=document.getElementById("leftarrow")
    let righttarrow=document.getElementById("rightarrow")
    let index=document.getElementById("index")



    let arr=[{heading:"CostaTerra Discovery's 23rd property", para:"Discovery Land Company, the world's leading<br>developer of luxury private residential communities,clubs and resorts, has announced its 23rd property and first in Europe",index:"1 of 3"}
    ,{heading:"Discovery’s newest property in Kaua’i North Shore Preserve",para:"Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kauai. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley.",index:"2 of 3" },{heading:"Heading for the third slide",para:"As the original content was unreachable due to security issues, i am pasting dummy here ",index:"3 of 3"},{heading:"Here goes the title",para:"The actual content couldnt be retrieved due to an expired certificate concerning the security of the website"}]


    heading.innerHTML=arr[0].heading
    para.innerHTML=arr[0].para
    index.innerHTML=arr[0].index

    let count=0


    leftarrow.addEventListener("click",function(){

   
        if(count>0){
            count=count-1
            heading.innerHTML=arr[count].heading
            para.innerHTML=arr[count].para
            index.innerHTML=arr[count].index

        }
    })

    righttarrow.addEventListener("click",function(){


    
        if(count<2){
            count=count+1
            heading.innerHTML=arr[count].heading
            para.innerHTML=arr[count].para
            index.innerHTML=arr[count].index

        }
    })

    $('#carouselExampleControls').carousel({        //FOR STOPPING THE SLIDE CYCLING TO FIRST
        wrap: false
      });    





})