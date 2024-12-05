// Dummy data untuk detail buku
const bookData = {
    0: {
        title: "Book Title 0",
        author: "Author 0",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book0.jpg",
        description: "An insightful non-fiction book that explores important topics."
    },
    1: {
        title: "Book Title 1",
        author: "Author 1",
        rating: "★★★★☆",
        genre: "Fiction",
        image: "fotoBuku/book1.jpg",
        description: "This is the first book in the collection, a thrilling fiction story."
    },
    2: {
        title: "Book Title 2",
        author: "Author 2",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book2.jpg",
        description: "An insightful non-fiction book that explores important topics."
    },
    3: {
        title: "Book Title 3",
        author: "Author 3",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book3.jpg",
        description: "This is the first book in the collection, a thrilling fiction story."
    },
    4: {
        title: "Book Title 4",
        author: "Author 4",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book4.jpg",
        description: "An insightful non-fiction book that explores important topics."
    },
    5: {
        title: "Book Title 5",
        author: "Author 5",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book5.jpg",
        description: "This is the first book in the collection, a thrilling fiction story."
    },
    6: {
        title: "Book Title 6",
        author: "Author 6",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book6.jpg",
        description: "An insightful non-fiction book that explores important topics."
    },
    7: {
        title: "Book Title 7",
        author: "Author 7",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book7.jpg",
        description: "This is the first book in the collection, a thrilling fiction story."
    },
    8: {
        title: "Book Title 8",
        author: "Author 8",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book8.jpg",
        description: "An insightful non-fiction book that explores important topics."
    },
    9: {
        title: "Book Title 9",
        author: "Author 9",
        rating: "★★★★★",
        genre: "Non-Fiction",
        image: "fotoBuku/book9.jpg",
        description: "This is the first book in the collection, a thrilling fiction story."
    },
    // Tambahkan detail buku lainnya
};

// Fungsi untuk mengambil ID dari URL
function getBookIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Fungsi untuk menampilkan detail buku
function displayBookDetail(bookId) {
    const book = bookData[bookId];
    if (book) {
        document.getElementById("book-title").innerText = book.title;
        document.getElementById("book-author").innerText = `Author: ${book.author}`;
        document.getElementById("book-rating").innerText = `Rating: ${book.rating}`;
        document.getElementById("book-genre").innerText = `Genre: ${book.genre}`;
        document.getElementById("book-description").innerText = book.description;
        document.getElementById("book-image").src = book.image;
    } else {
        alert("Book not found.");
    }
}

// Fungsi untuk tombol "Buy Now"
function buyBook() {
    alert("Thank you for purchasing this book!");
}

// Eksekusi fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const bookId = getBookIdFromUrl();
    displayBookDetail(bookId);
});
