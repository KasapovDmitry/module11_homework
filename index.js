import { getMonthName } from "./getMonthName.js";

const btn = document.querySelector('.btn');

function getMonth() {
    let result = document.querySelector('.result');
    let numMonth = document.querySelector('.input');

    result.innerHTML = getMonthName(numMonth.value);
}


btn.onclick = getMonth;
