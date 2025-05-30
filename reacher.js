// Fetch JSON data and populate the HTML
fetch('reacher.json')
    .then(response => response.json())
    .then(data => {
        // Extract JSON data
        const booksDiv = document.getElementById('books');
        const seriesName = data.series;

        // Add the series name and author to the page
        const seriesHeader = document.createElement('h2');
        seriesHeader.textContent = `Series: ${seriesName}`;
        booksDiv.appendChild(seriesHeader);

        // Add Title and Pages to console
        data.books.forEach((books, index) => {
            console.log(`Book ${index + 1}:`);
            console.log(`Title: ${books.title}`);
            console.log(`Pages: ${books.pages}`);
            console.log('------------');
            });
        });
