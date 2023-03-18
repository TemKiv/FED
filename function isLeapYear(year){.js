function isLeapYear(year){
    if((year%4==0)&& (year % 100 == 0)||(year % 400 == 0)){
        console.log("Year "+year+" is a leap year");
    } else {
        console.log("Year "+year+" is not a leap year");
    }
}

const year = Number(prompt("Enter a year: "));

function tryIsLeapYear(){
    try{
        if (year=="") throw "Missing argument year error";
        if (!Number.isInteger(year)) throw "Non-integer argument year error";
    } catch (e){
        console.log(e);
    }
}

tryIsLeapYear()
isLeapYear()
