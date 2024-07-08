function toggleDropdown() {
    const dropdown = document.getElementById('courseDropdown');
    dropdown.classList.toggle('show');
}

function selectCourse(course) {
    document.getElementById('selectedCourse').value = course;
    document.getElementById('courseDropdown').classList.remove('show');
}



function enrollUser() {
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('inputEmail3').value;
    const username = document.getElementById('Username').value;
    const password = document.getElementById('inputPassword3').value;
    const selectedCourse = document.getElementById('selectedCourse').value;

    // Store data in local storage (or send it to your server)
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('selectedCourse', selectedCourse);

    // Redirect to profile view
    window.location.href = 'enrollview.html';
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#selectedCourse')) {
        const dropdowns = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}