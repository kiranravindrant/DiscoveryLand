
window.addEventListener("DOMContentLoaded",function(){

    let weatherval=document.querySelector(".w-value")
    let windval=document.querySelector("#windval")
    let compassval=document.querySelector("#compassval")
    let leftbutton=document.querySelector(".left")
    let rightbutton=document.querySelector(".right")
    let location=document.getElementById("location")
    let country=document.getElementById("country")
    let cordinates=document.getElementById("cordinates")






    let arr = [{windval:"7.3mph",weatherval:"23.5F",compassval:"200°",location:"la Quinta, California",country:"Madison",cordinates:"38.198750°N/-8.764298° W"}
                ,{windval:"20mph",weatherval:"32.5F",compassval:"700°",location:"Scottsdale,Arizona",country:"Mirabel",cordinates:"30.574560°N/-11.4581521° W"}
                ,{windval:"70mph",weatherval:"38.1F",compassval:"230°",location:"Westhampton beach,NY",country:"Dune Deck",cordinates:"33.823760°N/-111.851592° W"}]

        weatherval.innerHTML=arr[0].weatherval
        windval.innerHTML=arr[0].windval
        compassval.innerHTML=arr[0].compassval
        location.innerHTML=arr[0].location
        country.innerHTML=arr[0].country
        cordinates.innerHTML=arr[0].cordinates


    let count=0
    

    leftbutton.addEventListener("click",function(){

        if (count>0){

            count=count-1
            weatherval.innerHTML=arr[count].weatherval
            windval.innerHTML=arr[count].windval
            compassval.innerHTML=arr[count].compassval
            location.innerHTML=arr[count].location
            country.innerHTML=arr[count].country
            cordinates.innerHTML=arr[count].cordinates

        }
        console.log(count)
       

    })


    rightbutton.addEventListener("click",function(){

        if(count<2){

            count=count+1
            weatherval.innerHTML=arr[count].weatherval
            windval.innerHTML=arr[count].windval
            compassval.innerHTML=arr[count].compassval
            location.innerHTML=arr[count].location
            country.innerHTML=arr[count].country
            cordinates.innerHTML=arr[count].cordinates
        }
        console.log(count)

        $('#carouselExampleControls').carousel({        //FOR STOPPING THE SLIDE CYCLING TO FIRST
            wrap: false
          });                                           

      


        
   
    })


  
   
    

})