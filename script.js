window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const content = document.getElementById('content');
    const loadingText = document.getElementById('loadingText');
    const loadingBar = document.getElementById('loadingBar');
    const toggleThemeButton = document.getElementById('toggleThemeButton');
    
    let progress = 0;

    // Dynamic loading text updates
    const loadingMessages = [
        'Loading resources...',
        'Fetching data...',
        'Almost there...',
        'Preparing content...',
        'Finalizing...'
    ];
    
    let messageIndex = 0;

    const loadingInterval = setInterval(() => {
        progress += 10;
        loadingBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingOverlay.style.display = 'none';
            content.style.display = 'block';
        } else {
            messageIndex = (messageIndex + 1) % loadingMessages.length;
            loadingText.textContent = loadingMessages[messageIndex];
        }
    }, 1000);

    // Theme toggle functionality
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});
