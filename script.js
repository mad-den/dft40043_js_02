function btn() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2)
    document.getElementById('BMI').innerText = BMI;
}
function btn1() {
    a=7;c="";
    for (b=1;b<13;b++) {
        c+=b+"X"+a+"="+(a*b)+"<br>";
    }
    document.getElementById('cal').innerText = cal;
}