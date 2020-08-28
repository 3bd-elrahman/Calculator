var screen=document.getElementById("screen");
var equal=document.getElementById("equal");
var clear=document.getElementById("clear");
var CE=document.getElementById("CE");
var dot = document.getElementById("dot");

function set_text(x){
    if(x=='+'||x=='-'||x=='X'||x=='÷'||x=='('){
        dot.disabled=false;
    }
    
var current_text = screen.value;
if(current_text.charAt(current_text.length-1)=='+'&&x=='+'||
current_text.charAt(current_text.length-1)=='-'&&x=='-'||
current_text.charAt(current_text.length-1)=='X'&&x=='X'||
current_text.charAt(current_text.length-1)=='÷'&&x=='÷'||
current_text.charAt(current_text.length-1)=='X'&&x=='X'||
current_text.charAt(current_text.length-1)=='('&&x==')'||
current_text.charAt(current_text.length-1)=='X'&&x=='÷'||
current_text.charAt(current_text.length-1)=='÷'&&x=='X'||
current_text.charAt(current_text.length-1)=='-'&&x=='X'||
current_text.charAt(current_text.length-1)=='-'&&x=='÷'||
current_text.charAt(current_text.length-1)=='+'&&x=='X'||
current_text.charAt(current_text.length-1)=='+'&&x=='÷'
){
    screen.value=current_text;
}else{
 screen.value=current_text+x;
}
}

equal.onclick=function () {
    
    
    var txt1=screen.value.replace(/X/i,"*");
    var txt2=txt1.replace(/÷/i,"/");
    try{
    screen.value=eval(txt2);
if(screen.value.includes('.')){
    dot.disabled=true;
}else{
    dot.disabled=false;
}


}
    catch(e){
        screen.value="NaN";
    }
    
}
clear.onclick=function() {
    dot.disabled = false ;
    screen.value='';


}
CE.onclick=function () {
    if(screen.value=="NaN"||screen.value=="Infinity"){
        screen.value='';
    }else{
        if(screen.value.charAt(screen.value.length-1)=="."){
           screen.value=screen.value.substring(0,screen.value.length-1);
           dot.disabled = false ;

        }else{
            screen.value=screen.value.substring(0,screen.value.length-1);

        }
        
  
}
}

dot.onclick=function(){
    var current_text = screen.value;
    screen.value=current_text+".";
    dot.disabled=true;

}