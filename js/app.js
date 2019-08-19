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

var newPicture = new Picture('R2D2 Bag', 'bag.jpg');
new Picture('Banana Slicer', 'banana.jpg');
new Picture('Multipurpose Stand', 'bathroom.jpg');
new Picture('Wet Rubber Boots', 'boots.jpg');

console.log(newPicture);
console.log(Picture.allPictures);

// create a function that displays one picture on the page
function displayOnePicture(){
  var firstImage = document.getElementById('picture-one');
  firstImage.src = Picture.allPictures[0].filePath;
}

displayOnePicture();


