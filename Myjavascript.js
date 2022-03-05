
function myfunction(str){
    if(str == "c"){
        document.getElementById('Display').innerHTML = "";
    }else if(str == "("){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat(" ( ");
        document.getElementById("Display").innerHTML = displayStr;
    }else if(str == ")"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat(" ) ");
        document.getElementById("Display").innerHTML = displayStr;        
    }else if(str == "/"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat(" / ");
        document.getElementById("Display").innerHTML = displayStr;      
    }else if(str == "7"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("7");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "8"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("8");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "9"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("9");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "*"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat(" * ");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "4"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("4");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if (str == "5"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("5");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "6"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("6");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "-"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat(" - ");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "1"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("1");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "2"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("2");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "3"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("3");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "+"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat(" + ");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "0"){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat("0");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "."){
        let displayStr = document.getElementById("Display").innerHTML;
        displayStr = displayStr.concat(".");
        document.getElementById("Display").innerHTML = displayStr;   
    }else if(str == "_"){
        let displayStr = document.getElementById("Display").innerHTML;
        if (displayStr[-1] == " "){
            displayStr = displayStr.slice(0,-2);
            document.getElementById("Display").innerHTML = displayStr;
        }else{
            displayStr = displayStr.slice(0,-1);
            document.getElementById("Display").innerHTML = displayStr;
        }
    }else if(str == "="){
        Calculate();
    }
}
function applyOp(opr,b,a){
    if (opr == "+"){
        return a+b;
    }else if(opr == "-"){
        return a-b;
    }else if(opr == "/"){
        if(b == 0){
            document.getElementById("Display").innerHTML = "cannot divide by 0";
        }else{
            return a/b;
        }
    }else if(opr == "*"){
        return a*b;
    }
}
function hasprecedence(op1,op2){
    if(op1 == "(" || op2 == ")"){
        return false;
    }else if((op1 == "+" || op1 == "-") && (op2 == "*" || op2 == "/")){
        return false;
    }else if(op1 == "("){
        return false;
    }else{
        return true;
    }
}
function Calculate(){
    let value = [];
    let op = [];
    let tempop;
    let displayStr = document.getElementById("Display").innerHTML;
    displayStr = displayStr.split(" ")
    console.log(displayStr);
    for (let i = 0; i < displayStr.length; i++){
        if(displayStr[i]>='0'){
            value.push( + displayStr[i]);
        }else if(displayStr[i] == "("){
            op.push(displayStr[i]);
        }else if(displayStr[i] == ")"){
            while(op[op.length-1] != "("){
                console.log(op);
                tempop = op.pop();
                console.log(tempop);
                value.push(applyOp(tempop,value.pop(),value.pop()));
            }
            op.pop();
        }else if(displayStr[i] == "+" || displayStr[i] == "-" || displayStr[i] == "/" || displayStr[i] == "*"){
            
            while(op.length != 0 && hasprecedence(op[op.length-1], displayStr[i]) && op[op.length-1] != "(" ){
                tempop = op.pop();
                value.push(applyOp(tempop,value.pop(),value.pop()));
            }
            op.push(displayStr[i]);
        }
    }
    while(op.length !== 0){
        value.push(applyOp(op.pop(),value.pop(),value.pop()));
    }

    document.getElementById("Display").innerHTML = value[0];
}
