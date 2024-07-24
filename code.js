const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    //  here we use some checks and that is getting easier in values to handle erro
    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid height${weight}`
    }
    else{
      const BMI = (weight / ((height*height)/1000)).toFixed(2)
      results.innerHTML = `<span> ${BMI}</span>`
    }
})



//     this below code is just for paratics set so do it again 
// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     // Check for valid height
//     if (height === '' || height <= 0 || isNaN(height)) {
//         results.innerHTML = `Please enter a valid height: ${height}`;
//     }
//     // Check for valid weight
//     else if (weight === '' || weight <= 0 || isNaN(weight)) {
//         results.innerHTML = `Please enter a valid weight: ${weight}`;
//     }
//     // Calculate and display BMI
//     else {
//         const BMI = (weight / ((height * height) / 10000)).toFixed(2);
//         results.innerHTML = `<span>${BMI}</span>`;
//     }
// });
