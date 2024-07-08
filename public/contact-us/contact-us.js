document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();

   const formData = new FormData(event.target);
   const formObject = {};
   formData.forEach((value, key) => formObject[key] = value);

   fetch('/contact', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(formObject),
       // credentials: 'include'
   })
   .then(response => response.json())
   .then(data => {
       if (data.status === 'success') {
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
