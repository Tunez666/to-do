// Создаем массив для хранения планов
let plans = [];

// Функция добавления плана
function addPlan(title, effort) {
    let plan = { title: title, effort: effort, completed: false };
    plans.push(plan);
}

// Функция редактирования плана
function editPlan(index, title, effort) {
    if (index >= 0 && index < plans.length) {
        plans[index].title = title;
        plans[index].effort = effort;
    } else {
        console.log("Индекс плана недействителен");
    }
}

// Функция отметки выполненных задач
function markCompleted(index) {
    if (index >= 0 && index < plans.length) {
        plans[index].completed = true;
    } else {
        console.log("Индекс плана недействителен");
    }
}

// Пример использования функций
addPlan("Завершить проект", 5); // Добавляем план
addPlan("Сделать упражнения", 3); // Добавляем еще один план
editPlan(0, "Завершить проект к 15 апреля", 7); // Редактируем первый план
markCompleted(0); // Отмечаем первый план как выполненный

// Выводим все планы в консоль
console.log("Список планов:");
plans.forEach((plan, index) => {
    console.log(`${index + 1}. ${plan.title} (Силы: ${plan.effort}) - ${plan.completed ? 'Выполнено' : 'Не выполнено'}`);
});