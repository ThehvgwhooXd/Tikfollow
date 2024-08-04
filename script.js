document.getElementById('generatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const followers = document.getElementById('followers').value;

    document.getElementById('user').innerText = username;
    document.getElementById('progress').classList.remove('hidden');

    let progress = 0;
    const progressBar = document.querySelector('.progress');

    // Fake progress bar animation
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 5; // Increase progress
            progressBar.style.width = progress + '%';
        } else {
            clearInterval(interval);
            alert(`Successfully added ${followers} followers to ${username}!`);
            document.getElementById('progress').classList.add('hidden');
            document.getElementById('generatorForm').reset();
            progressBar.style.width = '0';
        }
    }, 200); // Interval for updating progress
});
