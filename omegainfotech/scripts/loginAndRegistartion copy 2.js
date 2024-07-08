
        function selectCourse(course) {
            document.getElementById('selectedCourse').value = course;
        }
    

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
  });



// Function to check if user is logged in
function isLoggedIn() {
    // Example condition, you should replace this with your actual logic
    return sessionStorage.getItem('isLoggedIn') === 'true';
}

// Function to update UI based on login state
function updateUI() {
    const avatar = document.getElementById('avatar');
    const logoutMenu = document.getElementById('logoutMenu');
    const userNameDisplay = document.getElementById('user-name');
    const loginButton = document.getElementById('loginButton');

    if (isLoggedIn()) {
        const username = sessionStorage.getItem('username');
        showAvatar(username); // Show avatar with username initials
        avatar.style.display = 'flex'; // Show avatar container
        userNameDisplay.textContent = `Hello, ${username}`; // Show username
        loginButton.style.display = 'none';
        logoutMenu.style.display = 'none'; // Show logout menu
        
        //hideLoginButton(); // Hide login button
    } else {
        avatar.style.display = 'none'; // Hide avatar container
        userNameDisplay.textContent = ''; // Clear username display
        logoutMenu.style.display = 'none'; // Hide logout menu
        showLoginButton(); // Show login button
    }
}


// Function to open the user login modal
function openUserLoginModal() {
    document.getElementById('userLoginModal').style.display = 'block';
}

// Function to close the user login modal
function closeUserLoginModal() {
    document.getElementById('userLoginModal').style.display = 'none';
}


//adminlogin
function openAdminLoginModal() {
    document.getElementById('adminLoginModal').style.display = 'block';
}
function closeAdminLoginModal() {
    document.getElementById('adminLoginModal').style.display = 'none';
}



function openTrainerLoginModal() {
    document.getElementById('trainerLoginModal').style.display = 'block';
}
function closeTrainerLoginModal() {
    document.getElementById('trainerLoginModal').style.display = 'none';
}


// Function to open the login modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function closeLogoutMenu() {
    document.getElementById('logoutMenu').style.display = 'none';
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
function userLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var userLoginData = {
        username: username,
        password: password
    };

    fetch('http://localhost:8086/userLogin/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLoginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid username or password');
        }
        return response.json();
    })
    .then(user => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        alert('Login successful');
        closeLoginModal();
        
        closeUserLoginModal();
        
        updateUI(); // Update UI after successful login
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error-message').style.display = 'block';
        alert('Login failed');
    });
}

//function to handle Registration process
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
        closeLoginModal();
        closeUserLoginModal();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('reg-error-message').style.display = 'block';
        alert('Registration failed');
    });
}



function adminLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    var adminLoginData = {
        username: username,
        password: password
    };

    fetch('http://localhost:8086/userLogin/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminLoginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('login failed');
        }
        return response.json();
    })
    .then(data => {
        alert('Login successful');
        closeAdminLoginModal();
        closeLoginModal();
        updateUI();
        
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('reg-error-message').style.display = 'block';
        alert('login failed');
    });
}


//trainer login fun
function trainerLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    var trainerLoginData = {
        username: username,
        password: password
    };

    fetch('http://localhost:8086/userLogin/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trainerLoginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('login failed');
        }
        return response.json();
    })
    .then(data => {
        alert('Login successful');
        closeTrainerLoginModal();
        closeLoginModal();
        updateUI();
        
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('reg-error-message').style.display = 'block';
        alert('login failed');
    });
}

// Function to handle logout
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    updateUI(); // Update UI after logout
}

// Function to show avatar with username initials
function showAvatar(username) {
    const avatar = document.getElementById('avatar');
    const avatarText = username.charAt(0).toUpperCase(); // Get the first letter of username
    avatar.textContent = avatarText;
    avatar.style.backgroundColor = getRandomColor(); // Set avatar background color
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
    loginButton.style.display = 'none';
}

// Function to show login button
function showLoginButton() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.style.display = 'block'; // or 'inline-block', depending on your CSS
    }
}

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
    const userLoginModal = document.getElementById('userLoginModal');
    const registerModal = document.getElementById('registerModal');
    const logoutMenu = document.getElementById('logoutMenu');
    if (event.target === userLoginModal) {
        closeUserLoginModal();
    }
    if (event.target === registerModal) {
        closeRegisterModal();
    }
    if (logoutMenu && !logoutMenu.contains(event.target) && event.target.id !== 'avatar') {
        closeLogoutMenu();
    }
    
};

// Initial UI setup when the page loads
window.onload = function() {
    updateUI(); // Update UI based on initial login state
};


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