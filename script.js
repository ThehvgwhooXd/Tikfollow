document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const result = document.getElementById('result');

    generateButton.addEventListener('click', function() {
        loadingOverlay.classList.remove('hidden');

        // Simulate a loading process
        setTimeout(function() {
            loadingOverlay.classList.add('hidden');
            const likes = Math.floor(Math.random() * 10000) + 1000;
            const shares = Math.floor(Math.random() * 5000) + 500;
            const follows = Math.floor(Math.random() * 3000) + 300;

            result.innerHTML = `
                <p><strong>${likes}</strong> Likes generated!</p>
                <p><strong>${shares}</strong> Shares generated!</p>
                <p><strong>${follows}</strong> Follows generated!</p>
            `;
            result.classList.remove('hidden');
        }, 3000); // Simulate a 3-second loading time
    });
});
