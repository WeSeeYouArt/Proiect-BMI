document.querySelector('.btn').addEventListener('click', function() {

    const name = document.querySelector('.numele').textContent;
    // const year = document.querySelector('.anulNasterii').value;
    const height = document.querySelector('.inaltimea').value;
    const weight = document.querySelector('.greutatea').value;

    bmi = weight / (height * height);

    if(bmi < 18.5){
        category = "Underweight 😒";
    }

  //If BMI is >=18.5 and <=24.9
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Normal Weight 😍";
    }

  //If BMI is >= 25 and <= 29.9 
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight 😮";
    }

  //If BMI is <= 30
    else{
        category = "Obese 😱";
    }
  //All of the above text is stored in "category".

//Now you have to make arrangements to display the information in the webpage with the help of "textContent"
document.getElementById("category").textContent = [`BMI-ul este ${bmi} / ${category}`];
// document.querySelector('.rezultatBMI').textContent = [`BMI-ul este: ${bmi}`]
})