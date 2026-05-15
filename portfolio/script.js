// EmailJS

(function(){
  emailjs.init("3XDcupvXFAsjrOv2t");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(
    "service_i9712oj",
    "template_qq48lll",
    this
  )

  .then(() => {
    alert("Message Sent Successfully!");
  })

  .catch(() => {
    alert("Failed to send message");
  });

});




function openPopup(image){

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popup-img").src = image;
}

function closePopup(){

  document.getElementById("popup").style.display = "none";
}