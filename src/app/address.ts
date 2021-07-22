import { geo } from "./geo";

export class address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: geo;
}
// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
    


// firstName: ['', Validators.required],
// lastName: [''],
// address: this.fb.group({
//   street: [''],
//   city: [''],
//   state: [''],
//   zip: ['']
// }),