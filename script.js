function root() {
    let display = document.getElementsByName("display")[0];
    let currentValue = parseFloat(display.value);
    if (currentValue != 0) {
        let result = Math.sqrt(currentValue);
        display.value = result;
    elif(currentValue==0)
        {
          display.value="0"; 
        }
    } else {
        display.value = "Error: Cannot calculate square root of a negative number";
    }
}

function cuberoot() {
    let display = document.getElementsByName("display")[0];
    let currentValue = parseFloat(display.value);
    if (currentValue != 0) {
        let result = Math.cbrt(currentValue);
        display.value = result;
    elif(currentValue==0)
        {
          display.value="0"; 
        }
    } else {
        display.value = "Error: Cannot calculate square root of a negative number";
    }
}

function square()
{
    let display=document.getElementsByName("display")[0];
    let currentValue=parseFloat(display.value);
    let result=currentValue*currentValue;
    display.value=result;
}

function xpowern()
{
    let display=document.getElementsByName("display")[0];
    let curent=parseFloat(display.value);
    let n = parseFloat(prompt("Enter the value of nth power"))
    let result=Math.pow(curent,n);
    display.value=result;
}


function factorial() {
    let display = document.getElementsByName("display")[0];
    let current = parseFloat(display.value);
    let fact = 1;
    for (let i = 1; i <= current; i++) {
        fact *= i;
    }
    display.value = fact;
}

function log()
{
    let display=document.getElementsByName("display")[0];
    let current=parseFloat(display.value);
    let base=parseFloat(prompt("Enter the base of the logarithm:"));
    if(base<=0 || base<=1 || isNaN(base))
        {
            display.value="Invalid Base";
        }
    else{
        let res=Math.log(current)/Math.value(base);
        display.value=res;
    }
}

function sine() {
    let display = document.getElementsByName("display")[0];
    let current = parseFloat(display.value);
    let radian = current * (Math.PI / 180); // Convert degrees to radians
    let result = Math.sin(radian);
    display.value = result;
}

function cosine()
{
    let display=document.getElementsByName("display")[0];
    let current = parseFloat(display.value);
    let radian=current*(MATH.PI/180);
    let result=MATH.cosine(radian);
    display.value=result;
}

function tangent()
{
    let display=document.getElementsByName("display")[0];
    let current = parseFloat(display.value);
    let radian=current*(MATH.PI/180);
    let res=MATH.tangent(radian);
    display.value=result;
}
function appendToDisplay(value) {
    document.getElementById('test').value += value;
}


function secant()
{
    let display=document.getElementsByName("display")[0];
    let current=parseFloat(display.value);
    let radian=current*(MATH.PI/180);
    let R=MATH.secant(radian);
    display.value=R;
}

function cosecant()
{
    let display=document.getElementsByName("display")[0];
    let current=parseFloat(display.value);
    let radian=current*(MATH.PI/180);
    let R=MATH.cosecant(radian);
    display.value=R;
}

function cotangent()
{
    let display=document.getElementsByName("display")[0];
    let current=parseFloat(display.value);
    let radian=current*(MATH.PI/180);
    let R=MATH.cotangent(radian);
    display.value=R;
}