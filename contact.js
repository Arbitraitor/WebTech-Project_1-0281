const toggleBtn = document.getElementById('togglePressBtn');
const hiddenInfo = document.getElementById('hiddenPressInfo');

toggleBtn.addEventListener('click', function() {
    if (hiddenInfo.style.display === "none") {
        hiddenInfo.style.display = "block";
        toggleBtn.textContent = "Hide Confidential Press Contact";
    } else {
        hiddenInfo.style.display = "none";
        toggleBtn.textContent = "Show Confidential Press Contact";
    }
});

const messageInput = document.getElementById('senderMsg');
const charCounter = document.getElementById('charCounter');
const contactForm = document.getElementById('contactForm');
const maxChars = 250;

messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    charCounter.textContent = `${currentLength} / ${maxChars} characters`;

    if (currentLength > maxChars) {
        charCounter.classList.remove('text-info');
        charCounter.classList.add('text-danger');
        messageInput.style.borderColor = 'red';
    } else {
        charCounter.classList.remove('text-danger');
        charCounter.classList.add('text-info');
        messageInput.style.borderColor = '#6c757d';
    }
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from refreshing

    if (messageInput.value.length > maxChars) {
        alert("Please shorten your message before submitting.");
    } else {
        alert("Thank you! Your message has been sent to the studio.");
        contactForm.reset();
        charCounter.textContent = `0 / ${maxChars} characters`;
    }
});