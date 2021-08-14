/**************************************************************************
 * This program will listen for user arguments enter via the commandline while the program is running.
 * The arguments must be numbers between 1 - 9 seconds. If anything else is entered the program should
 * tell the user that the arg is not valid.
 *
 * The user may also:
 *   * Press 'b' to beep right right away.
 *   * Press ctrl + c to exit the program at any time.
 **************************************************************************/

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
const validTime = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

process.stdout.write(`To use this timer, please enter a time between 1 - 9 seconds. \n`);

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao! \n`);
    process.exit();
  }

  if (key === 'b') {
    process.stdout.write(`BEEP! \n`);
    process.stdout.write('\x07');
  }

  if (validTime.includes(key)) {
    process.stdout.write(`Setting timer for ${key} seconds ... \n`);
    let time = Number(key);

    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`Done! \n`);
    }, time * 1000);
  }
});