document.querySelector('.contact-form').addEventListener('submit', function(event) {

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    this.reset();
});
