document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const verseDisplay = document.getElementById('verseDisplay');

    searchButton.addEventListener('click', function () {
        const verseReference = searchInput.value;
        
        // Fetch from api
        fetch('https://bible-api.com/'+verseReference)
            .then(response => response.json())
            .then(data => {console.log(data)
                const verse = data.text
                const reference = data.reference

                if (verse) {
                    verseDisplay.textContent = `${reference}: ${verse}`;
                } else {
                    verseDisplay.textContent = 'Verse not found.';
                }
            })
            .catch(error => {
                console.error('Error fetching verses:', error);
                verseDisplay.textContent = 'Error fetching verses.';
            });
    });
});
