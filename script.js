const goalInput = document.getElementById('goalinput'); 
const addBtn = document.getElementById('addbtn'); 
const goalsContainer = document.getElementById('goalscontainer'); 

addBtn.addEventListener('click', function() {
    let text = goalInput.value.trim();
    
    if (text !== "") {
        const newGoal = document.createElement("div");
        newGoal.innerText = text;
        
        newGoal.style.background = "rgba(255, 255, 255, 0.1)";
        newGoal.style.backdropFilter = "blur(10px)";
        newGoal.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        newGoal.style.color = "white";
        newGoal.style.padding = "15px";
        newGoal.style.marginTop = "10px";
        newGoal.style.borderRadius = "12px";
        newGoal.style.width = "100%";
        newGoal.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
        newGoal.style.cursor = "pointer";
        
        newGoal.addEventListener('click', function() {
            newGoal.remove();
        });
        
        goalsContainer.appendChild(newGoal);
        goalInput.value = "";
    }
});

goalInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});
