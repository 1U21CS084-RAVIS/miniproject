function sendMail(){
    let gmail ={
        name : document.getElementById('name').value,
        mail : document.getElementById('mail').value,
        message : document.getElementById('message').value
    };
    console.log(gmail)
    emailjs.send("service_ogxgkjq","template_cweneb5",gmail).then(alert("Your message send Successfully..."))
}