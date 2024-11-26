function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "gauravchaudhary01509@gmail.com",
    Password: "ITc987@+",
    To: "mafahedi@imagepoet.net",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
