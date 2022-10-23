for(var i=0; i<7; i++){
    var drum = document.getElementsByClassName('drum')[i].addEventListener("click", function drums(){
        var text = this.innerHTML()
        playsound(text)
    })
}

document.addEventListener("keypress", function(event){
    playsound(event.key)
})

function playsound(){
    switch(text){
         
             case 'w':
             var audio1 = new Audio("Sounds/sounds_sound-1.mp3")
             audio1.play()
             break;
         
             case 'a':
             var audio2 = new Audio("Sounds/sounds_sound-2.mp3")
             audio2.play()
             break;
         
             case 's':
             var audio3 = new Audio("Sounds/sounds_sound-3.mp3")
             audio3.play()
             break;
         
             case 'd':
             var audio4 = new Audio("Sounds/sounds_sound-4.mp3")
             audio4.play()
             break;
         
             case 'i':
             var audio5 = new Audio("Sounds/sounds_sound-5.mp3")
             audio5.play()
             break;
         
             case 'o':
             var audio6 = new Audio("Sounds/sounds_sound-6.mp3")
             audio6.play()
             break;

             case 'p':
             var audio7 = new Audio("Sounds/sounds_sound-7.mp3")
             audio7.play()
             break;

             default:
                alert('Invalid Press')
    }
}