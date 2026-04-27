let goals = JSON.parse(localStorage.getItem('mygoals')) || [];
const goalInput = document.getElementById('goalInput');
const addBtn = document.getElementById('addBtn');
const goalsContainer = document.getElementById('goalsContainer');

function saveToLocal() {
    localStorage.setItem('mygoals', JSON.stringify(goals));
}

function renderGoals() {
    goalsContainer.innerHTML = "";
    goals.forEach((text, index) => {
        const newGoal = document.createElement("div");
        newGoal.innerText = text;
        newGoal.style.background = "rgba(255, 255, 255, 0.1)";
        newGoal.style.backdropFilter = "blur(15px)";
        newGoal.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        newGoal.style.borderRadius = "15px";
        newGoal.style.padding = "15px";
        newGoal.style.marginTop = "10px";
        newGoal.style.color = "white";
        newGoal.onclick = () => {
           newGoal.classList.toggle('completed');
        };
        goalsContainer.appendChild(newGoal);
    });
}
renderGoals();
addBtn.onclick = () => {
    if (goalInput.value.trim() !== "") {
        goals.push(goalInput.value);
        saveToLocal();
        renderGoals();
        goalInput.value = "";
    }
};
