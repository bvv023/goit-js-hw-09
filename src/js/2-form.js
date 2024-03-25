const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Отримання даних з локального сховища
const getFormDataFromStorage = () => {
  const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
  return formData || {};
};

// Зберігання даних в локальному сховищі
const setFormDataToStorage = (formData) => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

// Заповнення форми даними з локального сховища
const fillFormWithSavedData = () => {
  const formData = getFormDataFromStorage();
  emailInput.value = formData.email || "";
  messageTextarea.value = formData.message || "";
};

// Очищення форми
const clearForm = () => {
  emailInput.value = "";
  messageTextarea.value = "";
};

// Обробка події input
form.addEventListener("input", () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  setFormDataToStorage(formData);
});

// Обробка події submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };

  // Перевірка на заповненість
  if (!formData.email || !formData.message) {
    alert("Please fill in all the fields");
    return;
  }

  // Вивід даних в консоль
  console.log(formData);

  // Очищення сховища і форми
  clearForm();
  localStorage.clear();
});

// Заповнення форми при завантаженні сторінки
window.addEventListener("load", () => {
  fillFormWithSavedData();
});
