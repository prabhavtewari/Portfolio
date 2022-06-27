var form = document.getElementById('cform');
form.addEventListener('submit', function submit1(e) {
    e.preventDefault()
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("message").value = " ";
    window.scrollTo(0, 0);
    sendEmail(name, email, message);
});

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'prabhavtewari@gmail.com',
        Password: "jrdpzqdvubajxnvd",
        To: '1905331@kiit.ac.in',
        From: 'prabhavtewari@gmail.com',
        Subject: `-Portfolio Message form ${name}`,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`

    }).then((message) => alert("Message Sent"))
}
