document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const bio = document.getElementById('bio').value;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('bio', bio);

            window.location.href = 'profile_view.html';
        });
    }

    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayBio = document.getElementById('displayBio');

    if (displayName && displayEmail && displayBio) {
        displayName.textContent = localStorage.getItem('name');
        displayEmail.textContent = localStorage.getItem('email');
        displayBio.textContent = localStorage.getItem('bio');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const bookList = document.querySelector('.book-list');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const books = bookList.getElementsByTagName('li');

        Array.from(books).forEach(function(book) {
            const title = book.querySelector('figcaption').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    });
});
