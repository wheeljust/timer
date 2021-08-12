const alarms = process.argv.slice(2);

args = alarms
  .map(x => Number(x))
  .filter(x => x)
  .sort((a, b) => a - b);

for (const arg of args) {
  if (arg < 0) continue;

  setTimeout(() => {
    console.log(arg);
    process.stdout.write('\x07');
  }, arg * 1000);
}


