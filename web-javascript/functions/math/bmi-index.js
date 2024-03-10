const mass = prompt("What is your mass in kilograms?")
const height = prompt("What is your height in meters?")
const BMI = mass / height ** 2 
if (18.5 <= BMI && BMI < 25) {
    alert('You are healty')

}