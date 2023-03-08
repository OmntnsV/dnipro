/* ADMIN LIST */


/* https://docs.google.com/spreadsheets/d/1eWicJkKFLfr8pz4CsIL_TDEfbZl9nACHv8i-57LTiiU/edit?usp=sharing */
/* 1hwTzLlfQ4bNDgB_ze5xFqAviQbn7IMh9CutSXO_PGk8 */

const GSheetReader = require('g-sheets-api');

const options = {
    apiKey: 'AIzaSyA8abGk-iT5GSN7REqahleJ1Ir2tlnVdGo',
    sheetId: '1eWicJkKFLfr8pz4CsIL_TDEfbZl9nACHv8i-57LTiiU',
    sheetNumber: 1,
    sheetName: 'Старшая администрация', // if sheetName is supplied, this will take precedence over sheetNumber
    returnAllResults: false,
  }

  console.log('downloading internet');

    console.log('dwnldng trnt');
    GSheetReader(
        options,
        results => {
          console.log(results);
        },
        error => {
          // OPTIONAL: handle errors here
        }
      );