let a =prompt("nhập vào cân nặng(kg)");
let b=prompt("nhập vào chiều cao(m)");
BMI = a/(b*b);
if(BMI<18.5){
    alert("gầy");
}
else{
    if(18.5<=BMI&&BMI<=24.9)
        alert("bình thường");
    else{
        if(25<=BMI&&BMI<=29.9)
            alert("mập");
        else{
            if(30<=BMI&&BMI<34.9)
                alert("béo c1");
            else{
                if(34.9<=BMI&&BMI<=39.9)
                    alert("béo c2");
                else {
                    if(BMI>=40)
                        alert("nguy hiểm");
                }
            }
        }
    }
}