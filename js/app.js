function Picture(name, fileName){
  this.name = name;
  this.filePath = '/img/' + fileName;
  this.numOfDisplay = 0;
  this.numOfClicks = 0;
  this.pictureID = '';
  Picture.allPictures.push(this);
  // make the method that updates the numOfDisplay
  // make the method that updates the numOfClicks

  this.selectionPercentage = function(){
    var calculation = (this.numOfClicks/this.numOfDisplay) * 100;
    return calculation;
  };

}

Picture.allPictures = [];

new Picture('R2D2 Bag', 'bag.jpg');
new Picture('Banana Slicer', 'banana.jpg');
new Picture('Multipurpose Stand', 'bathroom.jpg');
new Picture('Wet Rubber Boots', 'boots.jpg');

// console.log(newPicture);
console.log(Picture.allPictures);

var img1 = document.getElementById('picture-one'); 
var img2 = document.getElementById('picture-two');
var img3 = document.getElementById('picture-three');

var title1 = document.getElementById('caption_one'); 
var title2 = document.getElementById('caption_two');
var title3 = document.getElementById('caption_three');


//create a function that generates a random number{
function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// console.log(getRandomIntInclusive(0, Picture.allPictures.length));


// function that displays any picture on the page
function displayOnePicture(imageToUpdate, titleToUpdate, index){
  imageToUpdate.src = Picture.allPictures[index].filePath;
  titleToUpdate.textContent = Picture.allPictures[index].name;
}

//create a function that randomly displays one picture
function displaysRandomPicture(imgEl, titleEl){
  var randomObjectIndex = getRandomIntInclusive(0, Picture.allPictures.length-1);
  displayOnePicture(imgEl, titleEl, randomObjectIndex);
} 

//function that ramdomly displays3 pictures;
function displays3RandomPictures(event){
  displaysRandomPicture(img1, title1);
  displaysRandomPicture(img2, title2);
  displaysRandomPicture(img3, title3);
  console.log(event.target);
}

// displays3RandomPictures();// displays pictures at the beginning and then event listener listens for click;
// displayOnePicture(img1, title1, 0);
// displayOnePicture(img2, title2, 1);
// displayOnePicture(img3, title3, 3);

//add event listeners that listens fo click on every picture and changes pistures to next three;



img1.addEventListener('click', displays3RandomPictures);// stworzyć  funkcję, która bierze event jako parameter i bedzie wywołana w event listenerze, która liczy ogólną ilość klików i wywywołuje f-cję displays3RandomPictures; wezmie też z event.target.src, aby wiedzieć, które zdjęcie zostało kliknięte; wtedy bede wiedzieć, które zdjęcie zstało kliknięte i bede mogła policzyć ilość klików na zdjęciu i poszukać src w liście(filepath to src) (spojrzeć na console.loga event.target);
img2.addEventListener('click', displays3RandomPictures);
img3.addEventListener('click', displays3RandomPictures);

