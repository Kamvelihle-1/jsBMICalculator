let w=document.querySelector('#weight')
let h =document.querySelector('#height')
let result=document.querySelector('#output')
let bmi=0;

document.querySelector('#Calc').addEventListener('click',()=>{
    
    
    if (validatorW()&&validatorH()) {
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

function validatorW() {
  
        switch (true) {
            case w.value.length ==0 :
                alert("Please enter a number for your weight and height")
                clear();
                return false;
                break;
            case w.value.length >0 :
                switch (true) {
                    case isNaN(w.value):
                        alert("Please enter a number for your weight and height")
                        clear();
                        return false;
                        break;
                
                    default:
                        return true
                        break;
                }
           
            
        }

}
function validatorH() {
  switch (true) {
   
        case h.value.length ==0 :
            alert("Please enter a number for your weight and height")
            clear();
            return false;
            break;
        case h.value.length >0 :
            switch (true) {
                case isNaN(h.value):
                    alert("Please enter a number for your weight and height")
                    clear();
                    return false;
                    break;
            
                default:
                    return true
                    break;
            }
            
            console.log("true");
            break;
       
    }

}
