function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "vasanthkumarv013@gmail.com",
        Password : "Password",
        To : 'vasanthkumarv013@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}