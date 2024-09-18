const input = document.getElementById("input")



//takes string and splits it into array letter by letter
//reverses array
//joins letters back together
function reverseString(str) {
    return str.split("").reverse().join("")
    
}


//compares the input value against the reversed value 
//if identical then input is a palindrome
//.toLowerCase function to fix capitalisation problem
function check() {
    const value = input.value.toLowerCase();
    const reverse = reverseString(value)
    
    if (value == reverse) {
        alert("Palindrome")
    }
    else {
        alert("Not Palindrome")
    }

    //removes string from box at end of check() run
    input.value = ""

}
