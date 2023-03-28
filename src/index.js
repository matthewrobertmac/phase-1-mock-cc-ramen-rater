let ramenMenuDiv = document.getElementById("ramen-menu");
let form = document.getElementById("new-ramen");

fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => renderRamens(ramens));


function renderRamens(ramens) {
    ramens.forEach((ramen) => {
        console.log(ramen);
        let ramenImage = document.createElement("img");
        ramenImage.src = ramen.image;
        ramenMenuDiv.append(ramenImage);

        ramenImage.addEventListener("click", function() {
            let displayRamenImage = document.querySelector(".detail-image");
            displayRamenImage.src = ramen.image;
            let displayName = document.querySelector(".name");
            let displayRestaurant = document.querySelector(".restaurant");
            displayName.textContent = ramen.name;
            displayRestaurant.textContent = ramen.restaurant;

            let ramenRating = document.querySelector("#rating-display");
            ramenRating.textContent = ramen.rating;

            let ramenComment = document.querySelector("#comment-display");
            ramenComment.textContent = ramen.comment;
        })
    })
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(
        e.target.name.value,
        e.target.restaurant.value,
        e.target.image.value, e.target["new-comment"].value
    );

    let newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value,
    };
    renderRamens([newRamen]);
})

/*

// write your code here
var ramenArray;

fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    ramenArray = ramens;
  })
  .then(() => {
    console.log(ramenArray);
  })
  .then(createRamenMenu);


ramenMenu = document.getElementById("ramen-menu")
const form = document.querySelector(".form")


function createRamenMenu() {
    ramenArray.forEach((ramen) => {
        console.log(ramen);
        ramenImg = document.createElement("img");
        ramenImg.addEventListener("click", ramenInfo = () => {
            document.querySelector('.detail-image').src = ramen.image;
            document.querySelector('.name').textContent = ramen.name;
            document.querySelector('.restaurant').textContent = ramen.restaurant;
           })
        ramenImg.src = ramen.image; 
        ramenMenu.append(ramenImg);
    });
    
    
    
    


}

/*


form.addEventListener("submit", function(e){
    let newRamen = {};
    e.preventDefault();
    console.log("Form is submitted");
    console.log(
        e.target.name.value,
        e.target.restaurant.value,
        e.target.image.value,
        e.target.rating.value,
        e.target.comment.value
    )
})

newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    commen: e.target.comment.value,
};


form.addEventListener("submit", function(e){
    let newRamen = {};
    e.preventDefault();
    console.log("Form is submitted");
    console.log(
        e.target.name.value,
        e.target.restaurant.value,
        e.target.image.value,
        e.target.rating.value,
        e.target.comment.value
    )
})

imgGoesHere.src = ramenImg.src; 

function createRamenMenu() {
    for (i = 0; i < ramenArray.length; i++) {
    console.log(ramenArray[i]);
    ramenImg = document.createElement("img");
    ramenImg.src = ramenArray[i].image;
    ramenMenu.append(ramenImg);
    
}}



/*
ramenImg.addEventListener("click", {
    imgGoesHere = ramenImg.src
})


ramenImg.addEventListener("click", {
    imgGoesHere = document.getElementsByClassName("detail-image");
    imgGoesHere.src = ramenImg;

})

/*
ramenArray.forEach(ramen => {
    for (let ramen in ramenArray) {
        ramenImg = document.createElement("img");
        ramenImg.src = ramenArray[ramen];
        console.log(ramenImg);
        ramenMenu.appendChild(ramenImg);
        }

})

*/


  /*
  
  
for (let ramen = 0; ramen < ramenArray.length; ramen++) {
    console.log(ramenArray[ramen]);
}
  
  console.log(ramens));

ramens.forEach(console.log(ramen))

ramenMenu = document.getElementById("ramen-menu")




/*


ramens.forEach(img => {
    ramenMenu.appendChild(createImage(img));
})

function createImage() {
    var img = document.createElement('img');

for (let ramen = 0; ramen < ramens.length; ramen++) {
    console.log(ramens[ramen]);
}




function createImage() {
    var img = document.createElement('img');
    img.src = 
}

ramenImages = document.createElement("img");
    ramenImages["ramen"].src = ramens.image["ramen"];
    ramenMenu.append(ramenImages);
    console.log(ramenImages);
ramens.forEach(ramenImages)

function ramenImages(ramens) {
    ramenImages = document.createElement("img");
    ramenImages[i].src = ramens[i].image



}

*/