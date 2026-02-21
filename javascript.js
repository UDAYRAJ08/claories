function calculateCalories() {

    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let activity = document.getElementById("activity").value;

    if(age === "" || weight === "" || height === "") {
        alert("Please fill all fields");
        return;
    }

    let bmr;

    if(gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let maintenance = bmr * activity;
    let loss = maintenance - 500;
    let gain = maintenance + 500;

    let resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";

    resultDiv.innerHTML = `
        <p>🔥 Maintain: <span class="calories">${maintenance.toFixed(0)} kcal/day</span></p>
        <p>⬇ Lose Weight: <span class="calories">${loss.toFixed(0)} kcal/day</span></p>
        <p>⬆ Gain Weight: <span class="calories">${gain.toFixed(0)} kcal/day</span></p>
    `;
}