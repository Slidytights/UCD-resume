function  sendMail(contactForm) {
    emailjs.send("service_qifblcw","Rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCSESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        })
        return false;
}