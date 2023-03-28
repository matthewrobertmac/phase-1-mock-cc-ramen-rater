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
  .then(createRamenImg);


ramenMenu = document.getElementById("ramen-menu")

function createRamenImg() {
    for (i = 0; i < ramenArray.length; i++) {
    console.log(ramenArray[i]);
    ramenImg = document.createElement("img");
    ramenImg.src = ramenArray[i].image;
    ramenMenu.append(ramenImg);
}}

ramenImg.addEventListener("click", {
    imgGoesHere = document.querySelector("img.detail-image");
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