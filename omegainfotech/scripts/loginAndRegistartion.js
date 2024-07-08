//  document.addEventListener('DOMContentLoaded', function() {
//     checkAccess(['admin', 'trainer']);
// });


// function checkAccess(permissionRoles) {
//     const role = sessionStorage.getItem('role');
//     if (!permissionRoles.includes(role)) {
//         //alert('Access Denied');
//         redirectToDashboard();
//     }
// }



        function selectCourse(course) {
            document.getElementById('selectedCourse').value = course;
        }
    

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
  });



// Function to check if user is logged in
function isLoggedIn() {
    return !!sessionStorage.getItem('username');
}

// Function to update UI based on login state
function updateUI() {
    const avatar = document.getElementById('avatar');
    const logoutMenu = document.getElementById('logoutMenu');
    const userNameDisplay = document.getElementById('user-name');

    if (isLoggedIn()) {
        //alert("login");
        const username = sessionStorage.getItem('username');
        showAvatar(username); // Show avatar with username initials
        avatar.style.display = 'flex'; // Show avatar container
        userNameDisplay.textContent = `Hello, ${username}`; // Show username
        logoutMenu.style.display = 'none'; // Show logout menu
        
        hideLoginButton(); // Hide login button
    } else {
        //alert("not login");
        avatar.style.display = 'none'; // Hide avatar container
        userNameDisplay.textContent = ''; // Clear username display
        logoutMenu.style.display = 'none'; // Hide logout menu
        showLoginButton(); // Show login button
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


function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    var loginData = {
        username: username,
        password: password
    };

    var apiEndpoint;
    switch (role) {
        case 'admin':
        case 'trainer':
        case 'user':
            apiEndpoint = 'http://localhost:8086/userLogin/authenticate';
            break;
        default:
            alert('Invalid role selected');
            return;
    }

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('role', role);
        console.log('Username stored in sessionStorage:', sessionStorage.getItem('username')); // Debugging line
        console.log('Role stored in sessionStorage:', sessionStorage.getItem('role')); // Debugging line
        alert('Login successful');
        closeLoginModal();
        updateUI();
        redirectToDashboard();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed');
    });
}


function redirectToDashboard() {
    const role = sessionStorage.getItem('role');
    switch(role) {
        case 'admin':
            window.location.href = '../loginIndex.html';
            break;
        case 'trainer':
            window.location.href = '../loginIndex.html';
            break;
        case 'user':
            window.location.href = '/enrol/enrollview.html';
            break;
        default:
            alert('Invalid role');
            logout();
            break;
    }
}




function toggleDropdown() {
    const dropdown = document.getElementById('courseDropdown');
    dropdown.classList.toggle('show');
}

function selectCourse(course) {
    document.getElementById('selectedCourse').value = course;
    document.getElementById('courseDropdown').classList.remove('show');
}


//function to handle Registration process
function register() {

    const username = document.getElementById('name').value;
    const email = document.getElementById('inputEmail3').value;
    const password = document.getElementById('inputPassword3').value;
    const course = document.getElementById('selectedCourse').value;

    var registerData = {
        username: username,
        emailId: email,
        password: password
        //course:course
    };

    fetch('http://localhost:8086/userLogin/storeLoginData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Enroll failed');
        }
        return response.json();
    })
    .then(data => {
        alert('Enroll successful, Login now');
        window.close();
        //closeLoginModal();
        
    })
    .catch(error => {
        console.error('Error:', error);
        //document.getElementById('reg-error-message').style.display = 'block';
        alert('Enroll failed');
    });
}



// Function to handle logout
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    updateUI(); // Update UI after logout
    window.location.href = '../index.html';
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
    const loginModal = document.getElementById('LoginModal');
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