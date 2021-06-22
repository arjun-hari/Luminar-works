//  object
// key value

// array []
// object {}   property:value , key:value
// property/keys=>jan feb march april may
// values are fetched by using corresponding key or property

var expens={jan:10000,feb:15000,march:22000,april:23000,may:20000};

// either expens[property/key] or expens.property/key

console.log(expens.march);
console.log(expens["march"]);

// may

console.log(expens.may);
console.log(expens["may"]);

// adding a new property:value
// june:25000

expens.june=25000
// expens["june"]=25000
console.log(expens);


//adding 3000 more to expense of march

expens.march+=3000;
console.log(expens);

//july (check for july is present)

console.log("july" in expens);

//check for june is present.if not add july:25000

if(!("july" in expens)){
expens.july=25000
}
console.log(expens);