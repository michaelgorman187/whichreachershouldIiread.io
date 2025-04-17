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
        
        });
    });
    .catch(error => console.error('Error fetching JSON:', error));

