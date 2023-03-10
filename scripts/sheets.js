/* ADMIN LIST */

const sheetId = '1eWicJkKFLfr8pz4CsIL_TDEfbZl9nACHv8i-57LTiiU';
const sheetPage = '1';
const sheetRange = 'A2:D11';

const sheetLink = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?sheet='
+ sheetPage + '&range=' + 'A2:G11';

let data;
let prof = {};

fetch(sheetLink, {crossorigin: true})
.then (res => res. text ())
.then (rep => {
data = JSON.parse(rep.substr(47).slice(0, -2));
console.log(data);

for (let row = 0; row < data.table.rows.length; row++) {
  const element = data.table.rows[row].c;
  if (row != 1) {
    const nick = "" + element[0].v;
    const job = element[3].v;
    console.log(job + ': ' + nick);
    if (prof[job] != undefined) {
        prof[job] += ", " + nick;
    }else {
        prof[job] = nick;
    }
  }
}
});

function nameGetter(request) {
    return prof[request];
}