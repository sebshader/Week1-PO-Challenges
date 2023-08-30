#!/usr/bin/env node

export function oddishOrEvenish(inNum) {
    inNum = inNum.toString().replace(/[^0-9]/g, '').split('');

    let num = inNum.reduce((previous, current) => previous + +current, 0);
    //console.log(num);
    return num & 1 ? "Oddish" : "Evenish";
}