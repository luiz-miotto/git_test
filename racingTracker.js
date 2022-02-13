let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

let registeredEarly = true
console.log(registeredEarly);

let runnerAge = 18;
console.log(runnerAge);


/*if(runnerAge > 18 && registeredEarly === true){
  console.log(raceNumber +=1000);
} else {console.log(raceNumber);
}*/

(runnerAge > 18 && registeredEarly === true)? console.log(raceNumber += 1000)
:console.log('just write this');

runnerAge === 18 ? console.log('test text')
: console.log('their age is not 18');

if ( runnerAge > 18 && registeredEarly === true){
  console.log(`${raceNumber} will race at 9:30 am.`);
} else if ( runnerAge > 18 && registeredEarly === false){console.log(`${raceNumber} will run at 11:00 am.`);
} else if (runnerAge < 18){
  console.log(`${raceNumber} will run at 12:30 pm.`);
} else{console.log('Please see the front desk.');
}
