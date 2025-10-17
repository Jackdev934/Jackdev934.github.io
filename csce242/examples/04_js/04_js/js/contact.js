document.getElementById("contact-form").onsubmit = (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const result = document.getElementById('contact-result');
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  
  result.innerHTML = "Please wait...";

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      result.innerHTML = "Email Sent";
    } else {
      console.error(response);
      result.innerHTML = data.message || "Error sending form.";
    }
  })
  .catch(error => {
    console.error(error);
    result.innerHTML = "Something went wrong!";
  })
  .finally(() => {
    form.reset();
    setTimeout(() => {
      result.style.display = "none";
    }, 3000);
  });
};
