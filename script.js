function load(){
  var message = window.document.getElementById('txt')
  var image = window.document.getElementById('image')
  var date = new Date()
  var hour = date.getHours() 
  var minutes = date.getMinutes().toString().padStart(2, '0')
 
  
  if(hour >= 6 && hour < 12){
    message.innerText = (`GOOD MORNING!\n It's  ${hour} hours and ${minutes} minutes`)
    image.src = "images/photo_morning.jpg"
    window.document.body.style.background = '#93a8a7'
  } else if (hour >= 12 && hour < 18){
    message.innerText = (`GOOD AFTERNOON!\n It's ${hour} hours and ${minutes} minutes`)
    image.src = "images/photo_afternoon.jpg"
    window.document.body.style.background = '#d47546'
  } else{
    message.innerText = (`GOOD NIGHT!\n It's ${hour} hours and ${minutes} minutes`)
    image.src = "images/photo_night.jpg"
    window.document.body.style.background = '#041754'
  }
}
