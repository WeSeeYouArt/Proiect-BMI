document.querySelector('.btn').addEventListener('click', function() {
    const name = document.querySelector('.numele').textContent;
    // const year = document.querySelector('.anulNasterii').value;
    const height = document.querySelector('.inaltimea').value;
    const weight = document.querySelector('.greutatea').value;

    bmi = weight / (height * height);

document.querySelector('.rezultatBMI').textContent = [`BMI-ul este: ${bmi}`];
})