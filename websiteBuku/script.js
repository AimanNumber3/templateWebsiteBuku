// Mendapatkan semua elemen book-card dan book-preview
const previewTitle = document.getElementById('preview-title');
const previewAuthor = document.getElementById('preview-author');
const previewGenre = document.getElementById('preview-genre');
const previewRating = document.getElementById('preview-rating');
const previewImage = document.getElementById('preview-image');

// Fungsi untuk memperbarui pratinjau buku
function updateBookPreview(bookCard) {
    // Mengambil data dari atribut data-
    const title = bookCard.getAttribute('data-title');
    const author = bookCard.getAttribute('data-author');
    const genre = bookCard.getAttribute('data-genre');
    const rating = bookCard.getAttribute('data-rating');
    const image = bookCard.getAttribute('data-image');

    // Memperbarui elemen di pratinjau buku
    previewTitle.textContent = title;
    previewAuthor.textContent = `Author: ${author}`;
    previewGenre.textContent = `Genre: ${genre}`;
    previewRating.textContent = `Rating: ${rating}`;
    previewImage.src = image;
}

// Menambahkan event listener ke setiap book-card
(document.querySelectorAll('.book-card')).forEach(bookCard => {
    bookCard.addEventListener('click', () => {
        updateBookPreview(bookCard);
    });
});
function goToDetailPage(bookId) {
    // Navigasi ke halaman detail produk dengan query string ID buku
    window.location.href = `detail.html?id=${bookId}`;
}

// Mendapatkan semua elemen book-card dan elemen dropdown
const bookCards = document.querySelectorAll('.book-card');
const dropdownItems = document.querySelectorAll('.dropdown-content a');

// Fungsi untuk menampilkan buku berdasarkan genre yang dipilih
function filterBooksByGenre(genre) {
    (document.querySelectorAll('.book-card')).forEach(bookCard => {
        // Menampilkan semua buku jika genre "all" dipilih
        if (genre === 'all' || bookCard.getAttribute('data-genre') === genre) {
            bookCard.style.display = 'block';
        } else {
            bookCard.style.display = 'none';
        }
    });
}

// Menambahkan event listener pada setiap item dropdown
dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Menghindari aksi default dari link
        const genre = item.getAttribute('data-genre');
        filterBooksByGenre(genre);
    });
});
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form submit otomatis

    // Mengambil nilai dari form input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Mengambil elemen pesan kesalahan
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('success-message');

    // Mengatur ulang pesan kesalahan
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
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

    // Validasi pesan
    if (message === '') {
        messageError.innerText = 'Message is required.';
        messageError.style.display = 'block';
        isValid = false;
    }

    // Jika form valid, tampilkan pesan sukses
    if (isValid) {
        successMessage.innerText = 'Form submitted successfully!';
        successMessage.style.display = 'block';
    }
});

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
