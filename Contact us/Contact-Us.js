const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Format the message
  const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;

  // Encode the message to be URL-friendly
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Define the WhatsApp API URL (replace '1234567890' with the actual phone number)
  const whatsappURL = `https://wa.me/+201558795406?text=${encodedMessage}`;

  // Open WhatsApp with the pre-filled message
  window.open(whatsappURL, '_blank');
});





