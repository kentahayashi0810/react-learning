let a = 0;

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
    // reject(a);
  }, 2000);
})
  .then((b) => {
    console.log(b);
    return b * 2;
  })
  .then((c) => {
    console.log(c);
  })
  .catch((d) => {
    console.log("Error", d);
  });
