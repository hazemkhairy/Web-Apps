let topLeftTextBox = document.getElementById("topLeft");
let topRightTextBox = document.getElementById("topRight");
let bottomLeftTextBox = document.getElementById("bottomLeft");
let bottomRightTextBox = document.getElementById("bottomRight");
let cssCodeDiv = document.getElementById("cssCode");
let polygon = document.getElementById("PolygonDiv");

const inputChange=()=>{
    
    polygon.style.borderTopLeftRadius = ((topLeftTextBox.value)||0)+"px";
    polygon.style.borderBottomLeftRadius = ((bottomLeftTextBox.value)||0)+"px";
    polygon.style.borderTopRightRadius = ((topRightTextBox.value)||0)+"px";
    polygon.style.borderBottomRightRadius = ((bottomRightTextBox.value)||0)+"px";

    cssCodeDiv.innerHTML="";
    writeBorderRadiusOncssCode("top-left",polygon.style.borderTopLeftRadius);
    writeBorderRadiusOncssCode("bottom-left",polygon.style.borderBottomLeftRadius) ;
    writeBorderRadiusOncssCode("top-right",polygon.style.borderTopRightRadius);
    writeBorderRadiusOncssCode("bottom-right",polygon.style.borderBottomRightRadius);
    
    console.log(polygon.style.borderTopLeftRadius);
}
const writeBorderRadiusOncssCode=(direction , value)=>{
    cssCodeDiv.innerHTML += "border-"+direction+"-radius: "+value+"<br>";
    cssCodeDiv.innerHTML += "-moz-border-"+direction+"-radius: "+value+"<br>";
    cssCodeDiv.innerHTML += "-webkit-border-"+direction+"-radius: "+value+"<br>";
}
inputChange();
topLeftTextBox.addEventListener("input",inputChange);
topRightTextBox.addEventListener("input",inputChange);
bottomLeftTextBox.addEventListener("input",inputChange);
bottomRightTextBox.addEventListener("input",inputChange);