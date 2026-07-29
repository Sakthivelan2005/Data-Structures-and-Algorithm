const reverseString  = (str) => {
    let stack = [];
    for(let char of str){
        stack.push(char);
    }

    let reversed = ""
    while(stack.length > 0){
        reversed += stack.pop()
    }
    
    return reversed;
}

console.log(reverseString("olleH"))