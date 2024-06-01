
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const formData = {
    email: '',
    message: ''
    };


form.addEventListener('input', () => {
    
    formData.email = form.elements.email.value.trim();

    formData.message = form.elements.message.value.trim();

    
    saveToLS(STORAGE_KEY, formData);
    
});


form.addEventListener('submit', e => {
  e.preventDefault();

  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    };

  console.log(formData);

    form.reset();
    
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
});


function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
};

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
};

window.addEventListener('DOMContentLoaded', () => {
    const formData = loadFromLS(STORAGE_KEY);
    
        form.elements.email.value = formData?.email ?? '';
        form.elements.message.value = formData?.message ?? '';
  });

