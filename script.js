let goals = JSON.parse(localStorage.getItem('myGoals')) || [];
const goalInput = document.getElementById('goalinput');
const addBtn = document.getElementById('addbtn');
const goalsContainer = document.getElementById('goalscontainer');

function saveToLocal() {
  localStorage.setItem('myGoals', JSON.stringify(goals));
}

function renderGoals() {
  goalsContainer.innerHTML = ""; 
  goals.forEach((text, index) => {
    const newGoal = document.createElement("div");
    newGoal.innerText = text;
    
    // --- هنا سر "الزجاج" (Glassmorphism) ---
    newGoal.style.background = "rgba(255, 255, 255, 0.1)"; // شفافية بيضاء خفيفة
    newGoal.style.backdropFilter = "blur(15px)"; // الزغللة اللي ورا الكارت
    newGoal.style.webkitBackdropFilter = "blur(15px)"; // عشان يشتغل على كل المتصفحات
    newGoal.style.border = "1px solid rgba(255, 255, 255, 0.2)"; // تحديد خفيف
    newGoal.style.borderRadius = "15px"; // حواف ناعمة
    newGoal.style.padding = "20px";
    newGoal.style.width = "90%"; // عشان تاخد عرض الصفحة
    newGoal.style.maxWidth = "400px"; // عشان متبقاش عريضة زيادة عن اللزوم في الشاشات الكبيرة
    newGoal.style.textAlign = "center"; // عشان الكلام يجي في النص بالظبط
    newGoal.style.margin = "15px auto"; // عشان الكارت يجي في نص الشاشة (Auto من اليمين والشمال)

    newGoal.style.marginTop = "15px";
    newGoal.style.color = "white";
    newGoal.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.37)"; // ضل بيبرز الكارت
    newGoal.style.cursor = "pointer";

    newGoal.onclick = () => {
      goals.splice(index, 1);
      saveToLocal();
      renderGoals();
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
