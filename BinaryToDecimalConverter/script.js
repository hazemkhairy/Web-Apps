
let button = document.getElementById("submitButton");
let textBox = document.getElementById("inputTextBox");
let resultDisplay = document.getElementById("resultDisplay");


const checkIfValid=(input)=>{
    console.log(`now we check ${input}`);
        
    for(let i = 0 ; i < input.length ; i++)
    {
        console.log(`now we check ${input[i]}`);
        if(!(input[i]<='1'&&input[i]>='0'))
            return false ;
    }
    return true;
}
const transferNewInput=()=>{
    let textBoxValue=textBox.value;
    let toBeDisplayed="";
    textBoxValue.trim();
    
    if(!checkIfValid(textBoxValue))
        toBeDisplayed="Please Enter Valid combination of 0's and 1's";
    else
    {
        toBeDisplayed="Decimal = " + convertBinaryToDecimal(textBoxValue);
    }
    
    resultDisplay.innerHTML=toBeDisplayed;
}


const convertBinaryToDecimal= (input)=>{
    let ret =0;
    let index = 0 ;    
    for (let i = input.length - 1 ; i >=0 ; i--)
        {
            ret += (Math.pow(2,index)*(input[i]-'0'));
            index++; 
        }
    return String(ret);
}

textBox.addEventListener("input",transferNewInput);