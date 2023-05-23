let w=document.querySelector('#weight')
let h =document.querySelector('#height')
let result=document.querySelector('#output')
let bmi=0;

document.querySelector('#Calc').addEventListener('click',()=>{
    
    
    if (validator(w,h)) {
        bmi=eval(w.value/Math.pow(h.value/100,2)).toFixed(2)
        bmiCalc(); 
        console.log(bmi);
    }
   
   
})
document.querySelector('#clear').addEventListener('click',()=>{
   clear();
})

function clear() {
    w.value=" ";
    h.value=" ";
    result.textContent=" ";
}

function bmiCalc(){
   
    if (bmi<18.5) {
        result.textContent=`BMI :${bmi}, You are underweight 😟 `
    } else if (bmi>=18.5 && bmi<=24.9){
        result.textContent=`BMI :${bmi}, You have a normal weight 😁 `
    }else if (bmi>=25 &&bmi<=29.9) {
        result.textContent=` BMI :${bmi} , You are overweight 🤨 `
    }else if (bmi>=30) {
        result.textContent=`BMI : ${bmi}, You are Obese 😐😶`
    }
}

function validator(x,y) {
    if (isNaN(x.value) || x.value.length==0 ){
        alert("Please enter a number for your weight and height")
        clear();
        return false;
    } else if ( isNaN(y.value)|| y.value.length ==0 ){
        alert("Please enter a number for your weight and height")
        clear();
        return false;
    }else{
        return true;
    }

}