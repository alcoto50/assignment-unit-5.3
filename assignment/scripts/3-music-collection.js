console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// [ ] Create an empty array named `myCollection`.

let myCollection = [];

// let album = {
//   title: 'title:',
//   artist: 'artist',
//   yearPublished: 'yearPublished',
// };

/*  ] Create a function named `addToCollection`. It should have this basic structure:
function addTo Collection(title, artist, year published) { code here}
This function should:
- Take in a `collection` parameter. (This allows the function to be reused to add an album to any array of album objects).
- Take in the album's `title`, `artist`, `yearPublished` as parameters.
- Create a new object having the above properties.
- *NOTE*: Your object's properties **must** have `title`, `artist`, and `yearPublished` in order for this assignment's automated tests to work correctly!
- Add the new object to the end of the `collection` array.
- `return` the newly created object.*/

function addToCollection( collection, title, artist, yearPublished) {
 let album = {
   title: title,
   artist: artist,
   yearPublished: yearPublished,
 };
 collection.push(album);
 return album;
};
  
//test the `addToCollection` function

console.log(addToCollection(myCollection, 'The Wall', 'Pink Floyd', 1979));
console.log(addToCollection(myCollection, 'The Dark Side of the Moon', 'Pink Floyd', 1973));
console.log(addToCollection(myCollection, 'The White Album', 'The Beatles', 1968));
console.log(addToCollection(myCollection, 'Abbey Road', 'The Beatles', 1969));
console.log(addToCollection(myCollection, '36 chambers', 'wu-tang' , 1979));
console.log(addToCollection(myCollection, 'The Dark Side of the Moon', 'Pink Floyd', 1973));
console.log(addToCollection(myCollection, 'The White Album', 'The Beatles', 1968));

/* - [ ] Create a function named `showCollection`. This function should:Take in a `collection` parameter. (This allows it to be reused to show any array of album objects).
  - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.
  - Takfe in a `collection` parameter. (This allows it to be reused to show any array of album objects).
  - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.*/
// test the `showCollection` function*/

  function showCollection(collection) {
    for (let i = 0; i< collection.length; i++) {
      console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }};

/* - [ ] Create a function named `findByArtist`. This function should:
  - Take in a `collection` parameter. Remember, we want to be able to search any collection!
  - Take in an `artist` (string) parameter.
  - Create an empty array to hold any matching results, if any.
  - Loop through the `collection` and add any album objects with a matching artist to the array.
  - Return the array with the matching results. (If no results are found, an empty array should be returned).*/

function findByArtist(collection, artist) {
  let results = [];
  for (let i=0; i<collection.length; i++) {
    if (collection[i].artist === artist) {
      results.push(collection[i]);
    }};
    return results;
  };

  /* - [ ] Use and test the `findByArtist` function.
  - Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
  - Check that for artists with multiple matches, all are returned.
  > when testing the function, write all tests in the java script files!*/

  /* ### Stretch Goal
  [ ] Create a function called `search` that will allow for searching by `artist` **and** `yearPublished`. This function should:
  - Take in a `collection` parameter.
  - Take in a `searchCriteria` parameter. Create your solution based on a *search object* that has these properties:
{artist: 'Ray Charles', yearPublished: 1957}
- The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching **all** of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object, an empty search object, or missing `artist`/`yearPublished` data provided as input, `return` **all albums** from the `collection` being searched.*/

function search(collection, searchCriteria) {
    let results = [];
    for (let i=0; i<collection.length; i++) {
      if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished) {
        results.push(collection[i]);
      }};
    return results;
  };


  




















// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
