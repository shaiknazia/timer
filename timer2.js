
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
process.stdout.write(`Press 'b' to beep.\nPress any number betweeb 0 - 9 to set timer.\nPress ctrl+c to exit.\n`);
process.stdin.on('data', (key) => {
  
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key >= '0' && key <= '9') {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});


// setTimeout(() => {
//         process.stdout.write('\x07');
//       }, time * 1000);
//     }