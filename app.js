



const dayname = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat' ]
const date = new Date();

console.log(`

DAY    : ${ dayname[date.getDay()] }
DATE   : ${ date.getDate()  }
MONTH  : ${ date.getMonth() + 1 }
YEAR   : ${ date.getFullYear() }

TIME   : ${ date.getHours() > 12 ? (date.getHours() -12) : date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() } ${ date.getHours() > 12 ? 'PM' : 'AM'}

`);
















// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];



// console.log(azam.());






//  tostring >         k arry korar jonno
//  Join    >          arry k String jonno
//  split >            holo string theke arry kore kata kati koro


//  push >             laste add kora
//  pop >              nlaste ta bad dey
//  unshift >                firste add kora
//  shift >            first cut kore
//  slice >            roginal arry not change but orginal arry copy 
//  splice >           kaj cut kora and new  add (2, 3, "azam" "king" "badsa") 
                    // delete data back let newarr = value
// splice >            all array delete korar jonno food.splice(0, food.lenght)



// concat()   >        new variable add korar kaj
// reverse() >        mane ultta kore fela
// sort()    >        holo  a b c line by line kora
// filter()
// reduce()
// every()
// some() 
// index()
// find()
// findindex()
// from()
//  keys()
// -> isArray()        Arry.isarry    arry na arry na just true false
// -> includes()       true and false
// valueOf()









// const azam = 'I love you p my father and p my mother and p my sister.';
// ;

// console.log(azam.split(''));
// -----------------------------------------------


// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];

// azam.push('jaaaaa', 'paaaaa', 'naaaa');
// console.log(azam);
// -----------------------------------------------
// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];

// azam.pop()

// console.log(azam);
// -----------------------------------------------

// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];

// azam.unshift('maaaaaa', 'baaaaa', 'taaaaaaa', 'saaaaaaaa');
// console.log(azam);
// > -----------------------------------------------

// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];

// azam.shift()
// azam.shift()
// console.log(azam);
// -----------------------------------------------

// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];



// let king = azam.splice(4, 2, 'jamal', 'kamal', )
// console.log(azam);
// console.log(king);
// > ------------------------------------------------------------------

// const azam= [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];

// let king = azam.slice(2, 6)
// console.log(azam);
// console.log(king);
// // > ---------------------------------------------------------------


// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];
// const azam1 = [
//     'saaaa', 'jaaaaaa', 'arrrrrrrr', 'abbbbbbbb', 'maaaaaaa', 'koooooooo', 'allllllll', 'raaaaa',
// ];
// console.log(azam.concat(azam1));
// >------------------------------------------------------------


// const azam = [
//     'n', 'd', 'a', 'e', 'o', 't', 'f', 's'
// ];

// console.log(azam.sort().reverse());
// > -----------------------------------------------------------

// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];

// console.log(azam. join(' '));
// > -----------------------------------------------------------

// const azam = [
    //     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
    // ];
    
    // console.log(azam.includes('kayda'));
// > ---------------------------------------------------------

// const azam = [
//     'sathi', 'janat', 'arman', 'arif', 'mijan', 'komol', 'amol', 'raju',
// ];

// const mijan = 
// 'jannat';

// console.log(Array.isArray(mijan));
 // > ----------------------------------------------------------

// for of 
// for is




