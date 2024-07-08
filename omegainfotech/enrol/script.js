
document.addEventListener('DOMContentLoaded', (event) => {
    // Retrieve data from local storage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    const selectedCourse = localStorage.getItem('selectedCourse');

    // Update profile with user data
    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-email').innerText = email;
    document.getElementById('profile-username').innerText = username;
    document.getElementById('profile-course').innerText = selectedCourse;
});
