const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const getFormDataFromStorage = () => {
  const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
  return formData || {};
};

const setFormDataToStorage = (formData) => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

const fillFormWithSavedData = () => {
  const formData = getFormDataFromStorage();
  emailInput.value = formData.email || "";
  messageTextarea.value = formData.message || "";
};

const clearForm = () => {
  form.reset();
};

form.addEventListener("input", () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  setFormDataToStorage(formData);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert("Please fill in all the fields");
    return;
  }

  console.log(formData);

  clearForm();
  localStorage.clear();
});

window.addEventListener("load", () => {
  fillFormWithSavedData();
});
