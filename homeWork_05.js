// 1

let promiseTwo = new Promise((resolve, reject) => {
   resolve("a");
});

promiseTwo
.then((res) => {
   return res + "b";
})
.then((res) => {
   return res + "с";
})
.finally((res) => {
   return res + "!!!!!!!";
})
.catch((res) => {
   return res + "d";
})
.then((res) => {
   console.log(res); // abc
});

// 2

function doSmth() {
   return Promise.resolve("123");
}

doSmth()
.then(function (a) {
   console.log("1", a); // 1 123
   return a;
})
.then(function (b) {
   console.log("2", b); // 2 123
   return Promise.reject("321");
})
.catch(function (err) {
   console.log("3", err); // 3 321
})
.then(function (c) {
   console.log("4", c); // 4 undefined
   return c;
});

// 3

const arr =  [10, 12, 15, 21];

function ping3s (arr) {
   let ping = 3000;
   arr.forEach((_, ind) => {
      setTimeout(() => console.log(ind), ping)
      ping += 3000;
   });
}

ping3s(arr);


// Бонус

const url = 'https://www.google.com'
const customFetch = {
    resolved: (url) => Promise.resolve('Пум пум'),
    rejected: (url) => Promise.reject('Пам пам'),
}

const fetchUrl = (ftch) => {
   let attempts = 0;
   const f = () => {
      return ftch(url)
                     .then(d => {
                         attempts = 0;
                         console.log(d)
                     }).catch(e => {
                        attempts++;
                        if (attempts > 5) {
                            attempts = 0;
                            console.log(e)
                        } else f(url); 
                     })
   }
   return f;
}

const fetchUrlResolvedInstance = fetchUrl(customFetch.resolved);
const fetchUrlRejectedInstance = fetchUrl(customFetch.rejected);
fetchUrlResolvedInstance();
fetchUrlRejectedInstance();
