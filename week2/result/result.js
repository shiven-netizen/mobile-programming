function calculateResult() {

    let m1 = Number(document.getElementsByClassName("marks")[0].value);
    let m2 = Number(document.getElementsByClassName("marks")[1].value);
    let m3 = Number(document.getElementsByClassName("marks")[2].value);
    let m4 = Number(document.getElementsByClassName("marks")[3].value);
    let m5 = Number(document.getElementsByClassName("marks")[4].value);
    let m6 = Number(document.getElementsByClassName("marks")[5].value);
    let m7 = Number(document.getElementsByClassName("marks")[6].value);
    let m8 = Number(document.getElementsByClassName("marks")[7].value);

    let total = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8;

    document.getElementById("total").innerText = "Total Marks: " + total + " / 800";

    let resultText = document.getElementById("result");

    if (total < 400) {
        resultText.innerText = "FAIL";
    } 
    else if (total < 500) {
        resultText.innerText = "Third Division";
    } 
    else if (total < 600) {
        resultText.innerText = "Second Division";
    } 
    else if (total < 700) {
        resultText.innerText = "First Division";
    } 
    else {
        resultText.innerText = "Distinction";
    }
}