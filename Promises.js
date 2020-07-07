const backend = (num) => 
 new Promise((resolve, reject) =>{
    if (num % 2 === 0){
        resolve("Number is Even");
    } else {
        reject("Number is Odd");
    }
    });


const builtInFunc = (num) => {
   return backend(num).then((success) => {
        console.log(num + ' : Success:',success)
    }).catch((failed) => {
        console.log(num + ' : Failed:',failed)
    })
};
async function asynAwait() {
     await builtInFunc(4);
     await builtInFunc(3);

};

builtInFunc(8);

builtInFunc(9);

asynAwait();

