document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();

   const form = event.target;
   const formData = new FormData(form);

   fetch(form.action, {
       method: 'POST',
       headers: {
           'Accept': 'application/json'
       },
       body: formData,
   })
   .then(response => {
       if (response.ok) {
           alert('Message sent successfully!');
           window.location.href = 'index.html'; // Redirect to another page
       } else {
           alert('There was an error sending the message.');
       }
   })
   .catch(error => {
       console.error('Error:', error);
       alert('There was an error sending the message.');
   });
});
