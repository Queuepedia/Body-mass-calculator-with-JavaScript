document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get height and weight from input
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    let bmi = calculateBMI(height, weight);

    // Display result
    displayResult(bmi);
});

function calculateBMI(height, weight) {
    // BMI Formula: weight (kg) / [height (m)]^2
    let heightMeters = height / 100; // Convert height from cm to meters
    return (weight / (heightMeters * heightMeters)).toFixed(1);
}

function displayResult(bmi) {
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is: <strong>${bmi}</strong>`;
}
