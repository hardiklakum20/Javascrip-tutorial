//Immediately Invoked Function Expression

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected Two ${name}`);
})('Hardik')