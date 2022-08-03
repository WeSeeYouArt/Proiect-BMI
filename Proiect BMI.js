document.querySelector('.btn').addEventListener('click', function() {

    let name1 = document.querySelector('.name1').textContent;
    let name2 = document.querySelector('.name2').textContent;
    let height1 = document.querySelector('.height1').value;
    let height2 = document.qquerySelector('.height2').value;
    let weight1 = document.querySelector('.weight1').value;
    let weight2 = document.querySelector('.weight2').value;

    let bmi1;
    let bmi2;

    bmi1 = weight1 / (height1 ** 2);
    bmi2 = weight2 / (height2 ** 2);

document.querySelector('.result1').textContent = (`BMI lui ${name1} este ${bmi1}`);
document.querySelector('.result2').textContent = (`BMI lui ${name2} este ${bmi2}`);

if (bmi1 > bmi2) {
        document.querySelector('.compare-result').textContent = (`${name1} are BMI-ul mai mare.`);
    } else {
        document.querySelector('.compare-result').textContent = (`${name2} are BMI-ul mai mare.`);
    }
})