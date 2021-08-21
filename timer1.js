/************************************************
 * This program will take in any assortment of arguments from the commandline when starting the program.
 * The arguments should be numbers indicating at what intervals in seconds, that the timer should beep.
 *
 * If the user passes arguments that are not numbers, or less than 0 seconds, the program will skip over
 * these inputs and only beep at valid intervals.
 ***********************************************/

const alarms = process.argv.slice(2);

// Process argv takes in arguments as strings. So need to map each element to a number, then filter out anything that is NaN and less than 0. Use forEach to iterate on the remaining numbers and beep for the requested times.

alarms
  .map(x => Number(x))
  .filter(x => x && x > 0)
  .forEach(x => {
    setTimeout(() => {
      console.log(x);
      process.stdout.write('\x07');
    }, x * 1000);
  });
