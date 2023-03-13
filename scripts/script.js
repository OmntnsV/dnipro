"use strict";

const selectorSecond = document.querySelector('#pathTo');


// for (const key in selectorSecond) {
//     if (Object.hasOwnProperty.call(selectorSecond, key)) {
//         console.log(key + " " + selectorSecond[key])
//         delete selectorSecond.key;
        
//     }
// }



document.querySelector('#path').addEventListener('change', function () {

    if (document.querySelector('#pathTo').hasAttribute('disabled')) {
        document.querySelector('#pathTo').removeAttribute('disabled');
    }
// const toRemove =
    document.querySelectorAll('.added').forEach((elem) => {
        elem.remove();
    });

    // for (let index = 0; index < toRemove.length; index++) {     // Удалитель предыдущих вариантов
    //     const element = toRemove[index];
    //     element.remove();
    //     console.log("Element type is: " + typeof element);
    // }

    let choise = document.querySelector('#path').value;

    switch (choise) {                                           // Проверяет выбор в первом списке и отправляет функции список дальнейших путей

        case 'pk1':
            console.log('Выбран пк1');
            setSelectorOptions(pk1List);
        break;

        case 'pk2':
            console.log('Выбран пк2');
            setSelectorOptions(pk2List);
        break;

        case 'pk3':
            console.log('Выбран  пк3');
            setSelectorOptions(pk3List);
        break;

        case 'pk4':
            console.log('Выбран pk4');
            setSelectorOptions(pk4List);
        break;

        case 'tpk1':
            console.log('Выбран тпк1');
            setSelectorOptions(tpk1List);
        break;

        case 'tpk2':
            console.log('Выбран тпк2');
            setSelectorOptions(tpk2List);
        break;
    }

});



const pk1List = [
    {value: '3', title: '3-ий станционный путь ст. Покровская'},
    {value: '4', title: '4-ый станционный путь ст. Покровская'},
    {value: '1', title: 'Тупик по первому пути ст. Покровская'}
];

const pk2List = [
    {value: '4', title: '4-ый станционный путь ст. Покровская'},
    {value: '3', title: '3-ий станционный путь ст. Покровская'},
    {value: '2', title: 'Тупик по второму пути ст. Покровская'}
];

const pk3List = [
    {value: '1', title: '1-ый станционный путь ст. Покровская'},
    {value: '2', title: '2-ой станционный путь ст. Покровская'},
    {value: 'depot1', title: 'Выезд в депо по первому пути'},
];

const pk4List = [
    {value: '1', title: '1-ый станционный путь ст. Покровская'},
    {value: '2', title: '2-ой станционный путь ст. Покровская'},
    {value: 'depot1', title: 'Выезд в депо по второму пути'},
];

const tpk1List = [
    {value: '1', title: '1-ый станционный путь ст. Покровская'}
];

const tpk2List = [
    {value: '2', title: '2-ой станционный путь ст. Покровская'}
];

function setSelectorOptions(displayList) {

    for (let index = 0; index < displayList.length; index++) {

        const element = displayList[index];

        for (const key in element) {

            if (Object.hasOwnProperty.call(element, key)) {
                const selectorOption = document.createElement('option');
                const objectElement = element[key];
                selectorOption.key = objectElement;

                if (key == "title") {
                    selectorOption.innerText = objectElement;
                    selectorOption.setAttribute('value', element.value);
                    console.log("added: " + objectElement);
                    selectorOption.classList.add('added');
                    document.getElementById('pathTo').appendChild(selectorOption);
                    
                }
            }
        }       
    }
}

document.querySelector('#pathTo').addEventListener('change', function () {

    if (document.getElementById('dots') === null) {
        console.log('NETU BLYAT TOCHEK');
    } else {
        document.getElementById('dots').remove();
    }

    if (document.getElementById('copy') === null) {
        console.log('NETU BLYAT KOMANDI');
    } else {
        document.getElementById('copy').remove();
        document.getElementById('clipboard').remove();
    }

    let from = document.getElementById('path').value;
    
    if (from == 'tpk1') {
        from = 'pk1';
    } else if (from == 'tpk2') {
        from = 'pk2';
    }
    console.log('privet')
    console.log(from + ' eto from');
    const to = document.getElementById('pathTo').value;
    const clipboard = document.createElement('div');
    clipboard.classList.add("routes__clipboard");
    clipboard.setAttribute('id', 'clipboard');
    const way = '/sopen ' + from + '-' + to;
    const wayOpacity = document.createElement('op');
    wayOpacity.innerText = way;
    wayOpacity.setAttribute('id', 'copy')
    wayOpacity.classList.add('command__text');
    document.getElementById('command').appendChild(wayOpacity);
  
    document.getElementById('command').appendChild(clipboard);

    let borderColor = document.getElementById('command');
    borderColor.style.border = "#fff 1px solid";
    
});

document.getElementById('command').addEventListener('click', function(){
    const textToCopy = document.getElementById('copy').innerText;
    console.log(textToCopy);
    console.log(typeof textToCopy);
    navigator.clipboard.writeText(textToCopy).then(function(){
        alert("Команда скопирована");
    });
});


/* COMMUNITY */


const employees = document.querySelectorAll('.comm__proff');
console.log(employees);


for (let index = 0; index < employees.length; index++) {
    const empElement = employees[index];
    empElement.addEventListener('mouseout', function(empElement){
        nameDeleter(empElement.srcElement);
    });
}

function nameSetter(id, target) { // Список администрации
    console.log(id);
    if (id != "superAdmin" || id != "admin"){
        
    }else {
        target.innerText = nameGetter(target.innerText);
    }
    /*switch (id) {
        case 'ceo':
            target.innerText = nameGetter(target.innerText);
            break;
        
        case 'viceCeo':
            target.innerText = 'Κουνέλι σε ποτήρια, 123';
            break;

        case 'rev':
            target.innerText = '...:::Roman:::';
            break;

        case 'nsd':
            target.innerText = 'Omntns';
            break;

        case 'nsps':
            target.innerText = 'Временно отсутствует';
            break;

        case 'smi':
            target.innerText = 'mashinist_ua, Scoofik20k2';
            break;

        case 'dsp':
            target.innerText = 'KotoLizator';
            break;

        case 'mi':
            target.innerText = 'Временно отсутствует';
            break;

        case 'iomi':
            target.innerText = 'Временно отсутствует';
            break;

        case 'pm':
            target.innerText = 'Почётный машинист';
            break;
            
        default:
            
            break;
    }
    */
}

function nameDeleter(element) {
    const idOfElement = element.id;
    switch (idOfElement) {
        case 'ceo':
            element.innerText = 'Начальник метрополитена';
            break;
        
        case 'viceCeo':
            element.innerText = 'Зам. нач. метрополитена';
            break;

        case 'rev':
            element.innerText = 'Ревизор';
            break;

        case 'nsd':
            element.innerText = 'Нач. службы движения';
            break;

        case 'nsps':
            element.innerText = 'Нач. службы подвижного состава';
            break;

        case 'smi':
            element.innerText = 'Старший машинист-инструктор';
            break;

        case 'dsp':
            element.innerText = 'Диспетчер';
            break;

        case 'mi':
            element.innerText = 'Машинист-инструктор';
            break;

        case 'iomi':
            element.innerText = 'И. О. машиниста-инструктора';
            break;

        case 'pm':
            element.innerText = 'Почётный машинист';
            break;

        default:
            element.innerText = '404 Role not found';
            break;
    }
};

const superAdminsContianer = document.getElementById('superAdmin');

superAdminsContianer.addEventListener('mouseover', function(event){
    let selectedEmployee;
    if (event.target.id != null) {
        selectedEmployee = event.target.id;
        nameSetter(selectedEmployee, event.target);
    }
})

const adminsContianer = document.getElementById('admin');

adminsContianer.addEventListener('mouseover', function(event){
    if (event.target.id != null) {
        nameSetter(event.target.id, event.target);
    }
})