// E56 external file that contain a reusanble code that can be imported into other JavaScript files.
// Whrite reusable code for many different apps.
// Can contain variables, classes, functions.. and more. 
// Introduced as part od ECMAScript 2015 PaymentRequestUpdateEvent.

//koristiom object destructuring.
//sve sto hocemo da koristimo u ovom fajlu od varijabla i funkcija stavljamo u viticaste zagrade;
import {PI,getCir,getArea,getVolume} from './mathUtil.js';

const cir = getCir(10);
const area = getArea(10);
console.log(`${cir.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm3`);