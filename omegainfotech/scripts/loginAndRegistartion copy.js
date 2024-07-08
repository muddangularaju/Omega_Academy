
        function selectCourse(course) {
            document.getElementById('selectedCourse').value = course;
        }
    

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
  });



// Function to check if user is logged in
// Function to check if a user is logged in
function isLoggedIn() {
    return sessionStorage.getItem('isLoggedIn') === 'true';
}

// Function to check if a user is an admin
function isAdmin() {
    return sessionStorage.getItem('role') === 'admin';
}

// Function to update UI based on login state
function updateUI() {
    const avatar = document.getElementById('avatar');
    const logoutMenu = document.getElementById('logoutMenu');
    const userNameDisplay = document.getElementById('user-name');
    const loginButton = document.getElementById('loginButton');

    if (isLoggedIn()) {
        const username = sessionStorage.getItem('username');
        showAvatar(username);
        avatar.style.display = 'flex';
        userNameDisplay.textContent = `Hello, ${username}`;
        logoutMenu.style.display = 'block';
        if (loginButton) {
            loginButton.style.display = 'none';
        }
    } else {
        avatar.style.display = 'none';
        userNameDisplay.textContent = '';
        logoutMenu.style.display = 'none';
        if (loginButton) {
            loginButton.style.display = 'block';
        }
    }
}

// Function to open the login modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Function to open the register modal
function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}

// Function to close the register modal
function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

// Function to handle login process
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var loginData = {
        username: username,
        password: password
    };

    fetch('http://localhost:8086/login/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid username or password');
        }
        return response.json();
    })
    .then(user => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('role', user.role); // Assuming response includes user role
        alert('Login successful');
        closeLoginModal();
        updateUI();

        // Redirect based on role
        if (isAdmin()) {
            window.location.href = '../index.html'; // Replace with your admin dashboard URL
        } else {
            window.location.href = '../enroll/enrollview.html'; // Replace with your user dashboard URL
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error-message').style.display = 'block';
        alert('Login failed');
    });
}

// Function to handle registration process
function register() {
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;
    var email = document.getElementById('email').value;

    var registerData = {
        username: username,
        emailId: email,
        password: password
    };

    fetch('http://localhost:8086/login/storeLoginData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        return response.json();
    })
    .then(data => {
        alert('Registration successful');
        closeRegisterModal();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('reg-error-message').style.display = 'block';
        alert('Registration failed');
    });
}

// Function to handle logout
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    updateUI();
}

// Function to show avatar with username initials
function showAvatar(username) {
    const avatar = document.getElementById('avatar');
    const avatarText = username.charAt(0).toUpperCase();
    avatar.textContent = avatarText;
    avatar.style.backgroundColor = getRandomColor();
}

// Helper function to generate random color for avatar background
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to hide login button
function hideLoginButton() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.style.display = 'none';
    }
}

// Function to show login button
function showLoginButton() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.style.display = 'block';
    }
}

// Initial UI update based on login state
document.addEventListener('DOMContentLoaded', (event) => {
    updateUI();
});


// Function to toggle the logout menu visibility
function toggleLogoutMenu() {
    const logoutMenu = document.getElementById('logoutMenu');
    if (logoutMenu.style.display === 'none') {
        logoutMenu.style.display = 'block';
    } else {
        logoutMenu.style.display = 'none';
    }
}

// Optional: Close modals if clicked outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const logoutMenu = document.getElementById('logoutMenu');
    if (event.target === loginModal) {
        closeLoginModal();
    }
    if (event.target === registerModal) {
        closeRegisterModal();
    }
    if (logoutMenu && !logoutMenu.contains(event.target) && event.target.id !== 'avatar') {
        closeLogoutMenu();
    }
    
};

// Initial UI setup when the page loads
// window.onload = function() {
//     updateUI(); // Update UI based on initial login state
// };


function toggleCourseVisibility() {
    const hiddenCards = document.querySelectorAll('.course-cards .hidden');
    hiddenCards.forEach(card => {
        if (card.style.display === 'none' || card.style.display === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    const viewMoreButton = document.getElementById('viewMoreButton');
    if (viewMoreButton.innerText === 'View More') {
        viewMoreButton.innerText = 'View Less';
    } else {
        viewMoreButton.innerText = 'View More';
    }
}