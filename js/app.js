function Picture(name, fileName){
  this.name = name;
  this.fileName = '/img/' + fileName;
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
console.log(newPicture);

