// const { promisify } = require('util')
// const sleep = promisify(setTimeout)

const backend = (num) => 
 new Promise((resolve, reject) =>{
   setTimeout(() => {
        if (num % 2 === 0){
            resolve("Number is Even");
        } else {
            reject("Number is Odd");
        }
        }, 0);
    });


const builtInFunc = (num) =>  {
   return backend(num).then((success) => {
        console.log('Success:',success)
    }).catch((failed) => {
        console.log('Failed:',failed)
    })
};
async function asynAwait() {
     await builtInFunc(4);
     await builtInFunc(3);
     console.log('start');
};

builtInFunc(8);

builtInFunc(9);

asynAwait();