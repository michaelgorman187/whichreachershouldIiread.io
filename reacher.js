// Fetch JSON data and populate the HTML
fetch('reacher.json')
    .then(response => response.json())
    .then(data => {
        // Extract JSON data
        const booksDiv = document.getElementById('books');
        const seriesName = data.series;
        const authorName = booksdiv.author;
        const books = data.books;

        // Add the series name and author to the page
        const seriesHeader = document.createElement('h2');
        seriesHeader.textContent = `Series: ${seriesName}`;
        booksDiv.appendChild(seriesHeader);

        const authorHeader = document.createElement('h3');
        authorHeader.textContent = `Author: ${authorName}`;
        booksDiv.appendChild(authorHeader);

        // Display each book
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.innerHTML = `
                <h4>${book.title}</h4>
                <p><strong>Publication Date:</strong> ${book.year_published}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Summary:</strong> ${book.summary}</p>
                <p><strong>Goodreads Score:</strong> ${book.ratings.goodreads}</p>
            `;
            booksDiv.appendChild(bookElement);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

