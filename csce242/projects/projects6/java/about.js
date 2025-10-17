document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  let result = document.getElementById('contact-result');
  if (!result) {
    result = document.createElement('div');
    result.id = 'contact-result';
    form.insertAdjacentElement('afterend', result);
  }

  const showMessage = (message) => {
    result.textContent = message;
    result.style.display = 'block';
    setTimeout(() => {
      result.style.display = 'none';
    }, 3000);
  };

  form.onsubmit = (event) => {
    event.preventDefault();

    result.textContent = 'Please wait...';
    result.style.display = 'block';

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      let data = {};
      try { data = await response.json(); } catch {}
      if (response.ok) {
        showMessage('Email successfully sent');
        form.reset();
      } else {
        showMessage('Something went wrong, please try again!');
      }
    })
    .catch(() => {
      showMessage('Something went wrong, please try again!');
    });
  };
});
