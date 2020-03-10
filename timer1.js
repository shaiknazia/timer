const userInput = (process.argv.slice(2));


for (let time of userInput) {
  console.log(time);
  time = Number(time);
  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}
