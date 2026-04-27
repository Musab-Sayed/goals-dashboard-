// 1. تحميل الأهداف من الذاكرة (لو مفيش بيعمل مصفوفة فاضية)
let goals = JSON.parse(localStorage.getItem('mygoals')) || [];

const goalInput = document.getElementById('goalInput');
const addBtn = document.getElementById('addBtn');
const goalsContainer = document.getElementById('goalsContainer');

// 2. دالة حفظ البيانات في الذاكرة
function saveToLocal() {
    localStorage.setItem('mygoals', JSON.stringify(goals));
}

// 3. دالة عرض الأهداف على الشاشة
function renderGoals() {
    goalsContainer.innerHTML = "";
    
    goals.forEach((goal, index) => {
        const newGoal = document.createElement("div");
        
        // هنا بنقرأ النص من الكائن
        newGoal.innerText = goal.text; 
        
        // لو الهدف محفوظ إنه "تم"، بنضيف كلاس التشطيب فوراً
        if (goal.completed) {
            newGoal.classList.add('completed');
        }

        // تنسيق الزجاج (Glassmorphism)
        newGoal.style.background = "rgba(255, 255, 255, 0.1)";
        newGoal.style.backdropFilter = "blur(15px)";
        newGoal.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        newGoal.style.borderRadius = "15px";
        newGoal.style.padding = "15px";
        newGoal.style.marginTop = "10px";
        newGoal.style.color = "white";
        newGoal.style.cursor = "pointer";

        // لما تدوس على الهدف: يعكس حالته ويحفظها
        newGoal.onclick = () => {
            goal.completed = !goal.completed; // لو true تبقى false والعكس
            saveToLocal(); // حفظ الحالة الجديدة
            renderGoals(); // إعادة الرسم لتحديث الشكل
        };

        goalsContainer.appendChild(newGoal);
    });
}

// تشغيل العرض أول ما تفتح الصفحة
renderGoals();

// 4. إضافة هدف جديد
addBtn.onclick = () => {
    if (goalInput.value.trim() !== "") {
        // بنحفظ الهدف كـ "Object" فيه النص وحالة البداية
        goals.push({ 
            text: goalInput.value, 
            completed: false 
        });
        saveToLocal();
        renderGoals();
        goalInput.value = "";
    }
};
