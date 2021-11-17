//Creating the Media parent class
class Media{
  constructor(title, isCheckedOut, ratings){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get rating(){
    return this._rating;
  }

  set isCheckedOut(value){
    this._isCheckedOut = value;
  }

  getAverageRating(){
    let sum = this._ratings.reduce((acc,num) => acc + num);
    return sum / this._ratings.length;
  }

  toggleCheckOutStatus(){
    if(this._isCheckedOut){
      this._isCheckedOut = false;
    }else{
      this._isCheckedOut = true;
    }
  }

  addRating(value){
    if(value >= 1 && value <= 5){
      this._ratings.push(value);
    }
    else{
      console.log("Kindly enter a number between 1 and 5");
    }
  }

}

//Creating subclass Book that extents Media
class Book extends Media{
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

//Creating subclass Movie that extents Media
class Movie extends Media{
  constructor(director, title, runtime, movieCast){
    super(title);
    this._director = director;
    this._runtime = runtime;
    this._movieCast = movieCast;
  }

  get director(){
    return this._director;
  }

  get runtime(){
    return this._runtime;
  }
}

class CD extends Media{
  constructor(title, artist, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist(){
    return this._artist;
  }

  get songs(){
    return this._songs;
  }

  shuffle(anArray){
    for(let i = anArray.length - 1; i>0; i--){
      let j = Math.floor(Math.random() * (i+1));
      [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
    }
  }
}

class Catalog{

}

//Creating an instances of the book class
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//calling toggleCheckOutStatus method on historyOfEverything object
historyOfEverything.toggleCheckOutStatus();

//display the isCheckedOut value to the console
console.log(historyOfEverything.isCheckedOut);

//adding ratings to the created object three times
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//calling getAverageRating method on historyOfEverything object
console.log(historyOfEverything.getAverageRating());

//Creating an instance of the Movie class
const speed = new Movie('Jan de Bont', 'Speed', 116);

//calling toggleCheckOutStatus method on speed object
speed.toggleCheckOutStatus();

//display the isCheckedOut value of speed object to the console
console.log(speed.isCheckedOut);

//adding ratings to the created object three times
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//calling getAverageRating method on speed object
console.log(speed.getAverageRating());
