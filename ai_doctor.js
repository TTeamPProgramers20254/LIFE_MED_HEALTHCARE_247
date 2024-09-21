document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ai-doctor-form');
    const resultsDiv = document.getElementById('results');
    const apiKey = 'AIzaSyCJJC9Pe8UtLa_0-_1KnUqzqv8UtIb_v4g'; // Your API key
    const searchEngineId = '159edaeb18ae842ea'; // Your Search Engine ID

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const query = document.querySelector('input[name="query"]').value.trim(); // Get and sanitize input

        if (query === "") {
            resultsDiv.innerHTML = '<p>Please enter a query to get suggestions.</p>';
            return; // Stop if no query
        }

        const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${searchEngineId}`;

        // Clear any previous results
        resultsDiv.innerHTML = '<p>Loading suggestions...</p>';

        // Fetch data from the Google Custom Search API
        fetch(url)
            .then(response => {
                if (!response.ok) { // Check for HTTP errors
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resultsDiv.innerHTML = '<h2>AI Doctor Suggestions:</h2>'; // Title for results

                if (data.items && data.items.length > 0) {
                    data.items.forEach(item => {
                        resultsDiv.innerHTML += `
                            <div class="result-item">
                                <h3>${item.title}</h3>
                                <p>${item.snippet}</p>
                                <a href="${item.link}" target="_blank">Read More</a>
                            </div>`;
                    });
                } else {
                    resultsDiv.innerHTML += '<p>No results found. Try a different query.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Log the error for debugging
                resultsDiv.innerHTML = '<p>Failed to fetch results. Please try again later.</p>';
            });
    });
});
