function padString(str, num, symb, right = true) {

    if (typeof str !== 'string') return 'error';

    if (typeof num !== 'number') return 'error';    

    if (num > str.length) {
        if (typeof symb !== "string" || symb.length !== 1) return 'error';

        for (i = str.length; i < num; i++) {
            if (right) str += symb;
			
            else str = symb + str;
        }
    }
    else {
           str = str.substr(0, num);
    }
    return (str);
}
console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));