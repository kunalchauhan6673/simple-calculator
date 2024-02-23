let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // to evaluate 
        if (e.target.innerHTML == '=') {  
            string = eval(string);
            document.querySelector('input').value = string;
        }
        // to clear 
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        // to change sign 
        else if (e.target.innerHTML == '+/-') {
            if (string.startsWith('-')) {
                string = string.substring(1); 
            } else {
                string = '-' + string;
            document.querySelector('input').value = string;
        }
    }       
    // to perform arithmetic operations 
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    }); // Added a closing parenthesis here
});
