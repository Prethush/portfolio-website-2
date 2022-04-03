function sendMail(params) {
  let tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("gmail", "template_d2ediih", tempParams).then((res) => {
    alert("Your message has been sent. Thank you!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  });
}
