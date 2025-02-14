document.querySelectorAll('.code').forEach((input, index) => {
    input.addEventListener('input', (e) => {
        // Move to the next input field if a digit is entered
        if (e.target.value.length === 1 && index < 5) {
            document.querySelectorAll('.code')[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Handle backspace key
        if (e.key === 'Backspace') {
            if (input.value.length === 0 && index > 0) {
                document.querySelectorAll('.code')[index - 1].focus();
            }
        }
    });
});