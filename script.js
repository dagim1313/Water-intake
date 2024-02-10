
const weightInput = document.querySelector('#weight');
const weightUnit = document.querySelector('#weight-unit');
const weightUnitLabel = document.querySelector('#weight-unit-label');
const unitToggle = document.querySelector('#unit-toggle');
const calculateBtn = document.querySelector('#calculate-btn');
const resultDiv = document.querySelector('#result');

function updateWeightUnit() {
    if (unitToggle.checked) {
        weightUnit.textContent = 'kg';
        weightUnitLabel.textContent = 'kg';
        updateWeightValue('kg');
    } else {
        weightUnit.textContent = 'lb';
        weightUnitLabel.textContent = 'lb';
        updateWeightValue('lb');
    }
}

function updateWeightValue(unit) {
    const value = parseFloat(weightInput.value);
    if (unit === 'kg') {
        weightInput.value = (value * 0.453592).toFixed(1);
    } else {
        weightInput.value = (value / 0.453592).toFixed(1);
    }
}

function updateWeight() {
    if (unitToggle.checked) {
        localStorage.setItem('unit', 'kg');
    } else {
        localStorage.setItem('unit', 'lb');
    }
    localStorage.setItem('weight', weightInput.value);
}

function calculateWaterIntake() {
    const weight = parseFloat(localStorage.getItem('weight'));
    const unit = localStorage.getItem('unit');
    let waterIntake;  
    waterIntake = (weight * 0.5).toFixed(1);
    waterIntakeLiters = (waterIntake/33.814).toFixed(1);
    /* */
    waterIntakeInKirklandWaterBottles = (waterIntake/16.9).toFixed(0);
    resultDiv.innerHTML = `You should drink <span style="color: #2196f3">${waterIntake} ounces</span> of 💦🌊🧊 per day,
    or <span style="color: #2196f3">${waterIntakeLiters} liters</span>, 
    or <span style="color: #2196f3">${waterIntakeInKirklandWaterBottles} bottles of Kirkland Water</span>`;
    resultDiv.style.display = 'block';

}

unitToggle.addEventListener('change', () => {
    updateWeightUnit();
});

weightInput.addEventListener('change', () => {
    updateWeight();
});

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    calculateWaterIntake();
});

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    calculateWaterIntake();
});

// Load saved weight and unit type from localStorage
const savedWeight = localStorage.getItem('weight');
const savedUnit = localStorage.getItem('unit');
if (savedWeight && savedUnit) {
    weightInput.value = savedWeight;
    unitToggle.checked = savedUnit === 'kg';
    updateWeightUnit();
}