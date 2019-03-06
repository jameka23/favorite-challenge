const things = document.getElementById("things")
const locations = document.getElementById("location")
const wishlist = document.querySelector(".wishlist")

document.getElementById("saveButton").addEventListener("click", function(event){
    wishlist.innerHTML = `I can purchase ${things.value} at ${locations.value}.`
    things.value = "" // clears out the things input field 
    locations.value = "" // clears out the locations' input field 
    things.focus() // focuses on the first input tag 
})