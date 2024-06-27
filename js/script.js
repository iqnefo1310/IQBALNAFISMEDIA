const checkbox = document.getElementById('lock');
        
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        document.body.classList.add('lock-scroll');
    } else {
        document.body.classList.remove('lock-scroll');
    }
});