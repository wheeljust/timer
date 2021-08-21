/************************************************
 * This program will take in any assortment of arguments from the commandline when starting the program.
 * The arguments should be numbers indicating at what intervals in seconds, that the timer should beep.
 *
 * If the user passes arguments that are not numbers, or less than 0 seconds, the program will skip over
 * these inputs and only beep at valid intervals.
 ***********************************************/

const alarms = process.argv.slice(2);

// Process argv takes in arguments as strings. So need to map each element to a number, then filter out anything that is NaN and less than 0. Lastly, need to sort from lowest interval to highest so the beeps are in order.

const args = alarms
  .map(x => Number(x))
  .filter(x => x)
  .filter(x => x > 0)
  .sort((a, b) => a - b);

// Iterate through the args array and output beep.

for (const arg of args) {
  setTimeout(() => {
    console.log(arg);
    process.stdout.write('\x07');
  }, arg * 1000);
}


