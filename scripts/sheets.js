/* ADMIN LIST */


/* https://docs.google.com/spreadsheets/d/1eWicJkKFLfr8pz4CsIL_TDEfbZl9nACHv8i-57LTiiU/edit?usp=sharing */
/* 1hwTzLlfQ4bNDgB_ze5xFqAviQbn7IMh9CutSXO_PGk8 */

// const GSheetReader = require('g-sheets-api');

// const options = {
//     apiKey: 'AIzaSyA8abGk-iT5GSN7REqahleJ1Ir2tlnVdGo',
//     sheetId: '1eWicJkKFLfr8pz4CsIL_TDEfbZl9nACHv8i-57LTiiU',
//     sheetNumber: 1,
//     sheetName: 'Старшая администрация', // if sheetName is supplied, this will take precedence over sheetNumber
//     returnAllResults: false,
//   }

//   console.log('downloading internet');

//     console.log('dwnldng trnt');
//     GSheetReader(
//         options,
//         results => {
//           /* console.log(results); */
//         },
//         error => {
//           // OPTIONAL: handle errors here
//         }
//       );

const sheetId = '1eWicJkKFLfr8pz4CsIL_TDEfbZl9nACHv8i-57LTiiU';
const sheetPage = 'Старшая%20администрация';
const sheetRange = 'A2:D11';

const sheetLink = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?sheet='
+ '1' + '&range=' + 'A2:G11';

fetch(sheetLink, {crossorigin: true})
.then (res => res. text ())
.then (rep => {
let data = JSON.parse(rep.substr(47).slice(0, -2));
console.log(data);

for (let row = 0; row < data.table.rows.length; row++) {
  const element = data.table.rows[row].c;
  const nick = element[0].v;
  const prof = element[3].v;
  console.log(nick + ': ' + prof);
}
});