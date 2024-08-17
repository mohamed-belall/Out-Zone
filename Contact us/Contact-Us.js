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

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form from submitting the traditional way

//   // Collect form data
//   var name = document.getElementById('username').value;
//   var email = document.getElementById('email').value;
//   var phone = document.getElementById('phone').value;
//   var subject = document.getElementById('subject').value;
//   var message = document.getElementById('message').value;

//   // Send email using SMTP.js
//   Email.send({
//       SecureToken : "42485976-ec3a-4085-be35-590adf0ddfa8",
//       Host : "smtp.elasticemail.com",
//       Username : "outzone.oz1@gmail.com",  // Replace with your actual username
//       Password : "FE779A9147A4CC5BA4CB1969C693D742E226",  // Replace with your actual password
//       To: "outzone.oz1@gmail.com",  // Send to your desired email
//       From: email,
//       Subject: "New Contact Form Submission",
//       Body: `<strong>Name:</strong> ${name}<br>
//              <strong>Email:</strong> ${email}<br>
//              <strong>Phone:</strong> ${phone}<br>
//              <strong>Subject:</strong> ${subject}<br>
//              <strong>Message:</strong> ${message}`
//   }).then(
//       response => alert(response === 'OK' ? 'Your message has been sent successfully.' : 'There was an error sending your message.')
//   );
// });





