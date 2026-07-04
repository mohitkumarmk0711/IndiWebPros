// Search Function

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let value = searchInput.value.toLowerCase();

        cards.forEach(function(card){
            let name = (card.dataset.name || card.querySelector('img')?.alt || "").toLowerCase();

            if(name.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// Save Button

const saveButtons = document.querySelectorAll(".overlay button");

saveButtons.forEach(function(button){

    button.addEventListener("click",function(event){
        event.stopPropagation();

        if(button.innerHTML === "Save") {
            button.innerHTML = "Saved";
            button.style.background = "green";
        } else {
            button.innerHTML = "Save";
            button.style.background = "#E60023";
        }

    });

});


// Download Button

const downloadButtons=document.querySelectorAll(".download-btn");

downloadButtons.forEach(function(button){

button.addEventListener("click",function(){

alert("Downloading Image...");

});

});


// Visit Site Button

const visitButtons=document.querySelectorAll(".visit-btn");

visitButtons.forEach(function(button){

button.addEventListener("click",function(){

alert("Opening Website...");

});

});