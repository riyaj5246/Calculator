var display = "";
var signPos;
var prevAns = "";
var prevAns2 = "";
var prevDisplay = "";
var mem = "";

function button(string){
    // alert(string);
    display = display + string;
    document.getElementById("screen").innerHTML = display;
    document.getElementById("screen2").innerHTML = prevAns;
}

function clearScreen(){
    display = "";
    prevDisplay = "";
    prevAns= "";
    prevAns2 = "";
    document.getElementById("screen2"). innerHTML = prevDisplay;
    document.getElementById("screen"). innerHTML = display;
}

function equal(){
    display.toString();
    var prevDisplay = display;
    //alert("display" + display);
    //alert("sign " + signPos);
    var num1= parseFloat(display.substring(0,signPos));
    var num2= parseFloat(display.substring(signPos+1));
    var sign= display.charAt(signPos);
    //alert("num1" + num1);
    //alert("num2" + num2);
    //alert("sign" + sign);

    if (sign === '+'){
        display = num1 + num2;
        document.getElementById("screen").innerHTML = display;
        prevAns2 = prevAns;
        prevAns = display;
    }
    else if (sign === '-'){
        display = num1 - num2;
        document.getElementById("screen").innerHTML = display;
        prevAns2 = prevAns;
        prevAns = display;
    }
    else if (sign === '*'){
        display = num1 * num2;
        document.getElementById("screen").innerHTML = display;
        prevAns2 = prevAns;
        prevAns = display;
    }
    else if (sign === '/'){
        display = num1 / num2;
        document.getElementById("screen").innerHTML = display;
        prevAns2 = prevAns;
        prevAns = display;
    }
    else if (sign === '^'){
        display = Math.pow(num1,num2);
        //alert(display);
        document.getElementById("screen").innerHTML = display;
        prevAns2 = prevAns;
        prevAns = display;
    }
    display = prevAns.toString();
    document.getElementById("screen2").innerHTML= prevDisplay;
}

function Operation(x){
    signPos = display.length;
    display= display + x;
    document.getElementById("screen").innerHTML = display;
}
function negative(){
    display = parseFloat(display) * (-1);
    display = display.toString();
    document.getElementById("screen").innerHTML = display;
    prevAns2 = prevAns;
    prevAns= display;
}
function Sqrt(){
    prevDisplay = display;
    display = Math.sqrt(parseFloat(display));
    display = display.toString();
    document.getElementById("screen2").innerHTML = "Sqrt." + prevDisplay;
    document.getElementById("screen").innerHTML = display;
    prevAns2 = prevAns;
    prevAns = display;

}
function del(){
    display = display.substring(0, display.length-1);
    document.getElementById("screen").innerHTML = display;
}

function previousAns(){
    var lastChar = display.substring(display.length-1);
    switch (lastChar){
        case '+':
        case '-':
        case '*':
        case '/':
        case '^': display = display + prevAns2;
            break;
        default: display = prevAns2;
    }
    display.toString();
    document.getElementById("screen").innerHTML = display;
}

function reciprocal(){
    prevDisplay = display;
    display = 1 / parseFloat(display);
    display = display.toString();
    document.getElementById("screen2").innerHTML = "1/" + prevDisplay;
    document.getElementById("screen").innerHTML = display;
    prevAns2 = prevAns;
    prevAns = display;
}
function Storage(){
    mem = display;
}
function printStorage(){
    var lastChar = display.substring(display.length-1);
    switch (lastChar)
    {
        case '+' :
        case '-' :
        case '*' :
        case '/' :
        case '^' :
            display = display + mem;
                    break;
        default:
            display = mem;
    }
    display.toString();
    document.getElementById("screen").innerHTML = display;
}