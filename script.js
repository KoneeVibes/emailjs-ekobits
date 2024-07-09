emailjs.init({
    publicKey: 'AUo5qgD4VFRlM15Kw',
});

function sendEmail(e) {
    e.preventDefault();
    var templateParams = {
        from_name: document.querySelector("#name").value,
        to_name: "Ofofonono",
        message: document.querySelector("#message").value,
        user_email: document.querySelector("#userEmail").value
    }
    emailjs.send('service_74iialk', 'template_83e5wnf', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}
