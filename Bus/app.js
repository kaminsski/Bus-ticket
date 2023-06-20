let passengers = []
const seats = document.querySelectorAll("span")
idStart=0
seats.forEach(function(seat){
    seat.id = idStart
    idStart+=1  
})

document.addEventListener("DOMContentLoaded",pageLoaded);

function pageLoaded(){
    yolcular = JSON.parse(localStorage.getItem("yolcular"))
    yolcular.forEach(function(yolcu){
        passengers.push(yolcu)})
       
    passengers.forEach(function(yolcu){
        id_seat = document.getElementById(yolcu.id)
        if (yolcu.gender == "male"){
            id_seat.classList.add("male")
            id_seat.classList.remove("available")
        }
        if (yolcu.gender == "female"){
            id_seat.classList.add("female")
            id_seat.classList.remove("available")
        }
    
    })
}

seats.forEach(function(seat){
    seat.addEventListener('click', function(event){
        if(event.target.classList.value.includes("available")){
            
            let isim = prompt("Name-Surname")
            let cinsiyet = prompt("Gender(Male/Female)").toLowerCase()
            
            if(cinsiyet && isim){
                if(cinsiyet == "male"){
                    event.target.classList.remove("available")
                    event.target.classList.add("male")
                    const object= {name:isim, gender:cinsiyet, id:event.target.id}
                    passengers.push(object)
                    localStorage.setItem("yolcular", JSON.stringify(passengers))
                    return
                }
                if(cinsiyet == "female"){
                    event.target.classList.remove("available")
                    event.target.classList.add("female")
                    const object= {name:isim, gender:cinsiyet, id:event.target.id}
                    passengers.push(object)
                    localStorage.setItem("yolcular", JSON.stringify(passengers))
                    return
                }
                }
            }
          
          
          
          
        if(event.target.classList.value.includes("male") ||event.target.classList.value.includes("female")){
            let cvb = alert("The selected seat is not available ")
            
        }
          
          
       
        })
        
       
       


}) 

