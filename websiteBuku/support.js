document.getElementById('support-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form submit otomatis

    // Mengambil nilai dari form input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const issue = document.getElementById('issue').value.trim();

    // Mengambil elemen pesan kesalahan
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const issueError = document.getElementById('issue-error');
    const successMessage = document.getElementById('success-message');

    // Mengatur ulang pesan kesalahan
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    issueError.style.display = 'none';
    successMessage.style.display = 'none';

    let isValid = true;

    // Validasi nama
    if (name === '') {
        nameError.innerText = 'Name is required.';
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validasi email
    if (email === '') {
        emailError.innerText = 'Email is required.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.innerText = 'Invalid email format.';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validasi pesan masalah
    if (issue === '') {
        issueError.innerText = 'Please describe your issue.';
        issueError.style.display = 'block';
        isValid = false;
    }

    // Jika form valid, tampilkan pesan sukses
    if (isValid) {
        successMessage.innerText = 'Support request submitted successfully!';
        successMessage.style.display = 'block';
    }
});

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
