/* ADMIN LIST */

const sheetId = '1eWicJkKFLfr8pz4CsIL_TDEfbZl9nACHv8i-57LTiiU';
const sheetPage = '1';
const sheetRange = 'A2:D11';

const sheetLink1 = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?sheet='
+ sheetPage + '&range=' + 'A2:G11';

const sheetLink2 = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?sheet='
+ 2 + '&range=' + 'A4:G11';

let data;
let prof = {}; // Object wich gets proffession from a sheet as a key and names of employees as a key value
let eNames = {}; // Object which has names from prof as a key and proffessions from prof as a key value

fetch(sheetLink1, {crossorigin: true})
.then (res => res. text ())
.then (rep => {
data = JSON.parse(rep.substr(47).slice(0, -2));
// console.log(data);

for (let row = 0; row < data.table.rows.length; row++) {
  const element = data.table.rows[row].c;
  if (row != 1) {
    let nick = '' + element[0].v;
    const job = element[3].v;
    if (nick === '-') {
      nick = (job + ' отсутствует');
    }
    console.log(job + ': ' + nick);
    if (prof[job] != undefined) {
        prof[job] += ', ' + nick;
    }else {
        prof[job] = nick;
    }
  }
}
});

let nameGetter = function(line) {
  let proffession = line.innerText;
  const forIf = 'Начальник метрополитена';
  if (proffession === forIf) {
    console.log('YPAAA');
    line.innerText = prof['Разработчик'];
  }else {
    line.innerText = prof[line.innerText];
  }
}

let nameDeletter = (line) => {
  for (const key in prof) {
    if (Object.hasOwnProperty.call(prof, key)) {
       eNames[prof[key]] = key;
    }
  }
  if (eNames[line.innerText] === 'Разработчик') {
      line.innerText = 'Начальник метрополитена';
  }else {
    line.innerText = eNames[line.innerText];
  }
}