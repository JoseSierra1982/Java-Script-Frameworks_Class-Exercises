// Promises: 
/* 
Promise => leave early:

- resolved => leaving early : happy
- rejected => no early living : sad

*/
//The executer to execute/run the promise action
function preparePizza(resolved,rejected){
}
//let pizzaOrder = new Promise(preparePizza);

let pizzaOrder = new Promise((resolved,rejected) => {
    isReady = true;
    if (isReady)      
        //resolved
        resolved("your order is ready");
    else 
        //rejected
        rejected("sorry you need to wait");
    });

    
