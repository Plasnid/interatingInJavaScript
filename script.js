console.log("get ready to sing!");

/**a regular function */
function friday(){
    console.log("I don't care if mondays blue");
    console.log("tuesdays grey and wednesday too");
    console.log("thursday I don't care about you");
    console.log("its friday!  I'm in love!");
}
console.log("a regular function runs all the way through")
friday();

/**  start with a generator */
function * eagles(){
    yield "on a dark desert highway";
    yield "cool wind in my hair";
    yield "warm smell of colitas";
    yield "rising up through the air";
}
console.log("\n\n a generator returns an iterator.")
let hotel = eagles();
console.log(hotel.next().value);
console.log(hotel.next().value);
console.log(hotel.next().value);
console.log(hotel.next().value);


/**make an array */
console.log("\n\n we can even use an array that loops forever if we choose")
let paintItBlack = [
    "I see a red door",
    "and I want it painted black",
    "not colour anymore",
    "I want to paint it black",
    "I see the girls walk by dressed in their summer clothes",
    "I have to turn my head until the darkness goes"
]
/**generator with an array */
function* stepGen(steps){
    let index = 0;
    while (true) {
      yield steps[index];
      index = (index+1)%steps.length;
    }
  }
  let stones = stepGen(paintItBlack); // pass array to make it more reusable
  console.log(stones.next().value); 

console.log("\n\n lets try it another way using yeild*");
function* showSong(steps){
    while (true) yield* steps;
}
let sixtiesSong = showSong(paintItBlack)
console.log(sixtiesSong.next().value); 
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log(sixtiesSong.next().value);
console.log("what happens when we hit the end of our array? we yield to the array");
console.log(sixtiesSong.next().value);

  console.log("\n\nlets try a for of loop")
  for(lyric of paintItBlack){
      console.log(lyric);
  }

  //finally lets try a for loop
  console.log("\n\n for loop starts here");
  for(let i=0;i<paintItBlack.length;i++){
      console.log(paintItBlack[i]);
  }
  console.log("\n\n lets do paint it black backwards");
  for(let i=paintItBlack.length-1;i>=0;i--){
    console.log(paintItBlack[i]);
}
  