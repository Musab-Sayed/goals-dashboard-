const goalInput = document.getElementById('goalinput');
const addBtn = document.getElementById('addbtn');
const goalsContainer = document.getElementById('goalscontainer');

addBtn.addEventListener('click', function() {
  
  // 1. ناخد الكلام اللي المستخدم كتبه
  let text = goalInput.value;

  // 2. نتأكد إنه مسبش الخانة فاضية وداس
  if (text !== "") {
// 3. نصنع "كارت" جديد (div)
    const newGoal = document.createElement("div");
    
// 4. نحط النص جوه الكارت
    newGoal.innerText = text;
    
// 5. ندي الكارت شوية ألوان عشان يبا
    newGoal.style.background = "rgba(255, 255, 255, 0.1)"; // شفافية
    newGoal.style.backdropFilter = "blur(10px)"; // تأثير الضباب
    newGoal.style.border = "1px solid rgba(255, 255, 255, 0.2)";
    newGoal.style.color = "white";
    newGoal.style.padding = "15px";
    newGoal.style.marginTop = "10px";
    newGoal.style.borderRadius = "12px";
    newGoal.style.width = "100%";
    newGoal.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)"; // ضل خفيف
newGoal.addEventListener('click', function() {
    newGoal.remove();
})
// 6. نزرع الكارت جوه الحاوية الكبيرة
    goalsContainer.appendChild(newGoal);

    // 7. نفضي الخانة عشان نكتب هدف جديد
    goalInput.value = "";
  }
});
