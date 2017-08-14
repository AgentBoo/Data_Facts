const chalk = require('chalk');
const moment = require('moment');


let todayFullDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

// NOTE:  moment().format('DDD') == moment().dayOfYear;
let todayOfYear = moment().format('DDD');

let dayLightSavings = (() => (moment().isDST()) ? 'is' : 'is not')();

let leapYear = (() => (moment().isoWeeksInYear() < 53) ? 'is not' : 'is')();

console.log(chalk`
  It is {bold.rgb(40, 210, 229) ${todayFullDate}} .
  It is the {bold.rgb(221, 84, 162) ${todayOfYear}th} day of the year.
  It is {bold.rgb(81, 226, 190) ${moment().hours()*3600 + moment().minutes()*60 + moment().seconds()}} seconds into the day.
  It {bold.rgb(47, 181, 64) ${dayLightSavings}} during Daylight Savings Time.
  It {bold.rgb(145, 11, 11) ${leapYear}} a leap year.
  `);

// function output(){
//   return chalk`
//     It is {bold.rgb(40, 210, 229) ${todayFullDate}} .
//     It is the {bold.rgb(221, 84, 162) ${todayOfYear}th} day of the year.
//     It is {bold.rgb(81, 226, 190) ${moment().hours()*3600 + moment().minutes()*60 + moment().seconds()}} seconds into the day.
//     It {bold.rgb(47, 181, 64) ${dayLightSavings}} during Daylight Savings Time.
//     It {bold.rgb(145, 11, 11) ${leapYear}} a leap year.
//     `;
// };
//
// output();
