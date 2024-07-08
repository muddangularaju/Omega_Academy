document.addEventListener('DOMContentLoaded', () => {
    // const logoutMenu = document.getElementById('logoutMenu');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoItems = document.querySelectorAll('li[data-video]');
    const dropdownItems = document.querySelectorAll('.dropdown-menu a');
    
    videoItems.forEach(item => {
      item.addEventListener('click', () => {
        //logoutMenu.style.display = 'none'; //hinding logout menu
        const videoSrc = item.getAttribute('data-video');
        videoSource.src = videoSrc;
        videoPlayer.load();
        videoPlayer.play();
      });
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            logoutMenu.style.display = 'none'; // Hiding logout menu when navigating to other pages
        });
    });
    
  });


  // Function to check if user is logged in
// function isLoggedIn() {
//     // Example condition, you should replace this with your actual logic
//     return sessionStorage.getItem('isLoggedIn') === 'true';
// }

// // Function to update UI based on login state
// function updateUI() {
//     const avatar = document.getElementById('avatar');
//     const logoutMenu = document.getElementById('logoutMenu');
//     const userNameDisplay = document.getElementById('user-name');

//     if (isLoggedIn()) {
//         const username = sessionStorage.getItem('username');
//         showAvatar(username); // Show avatar with username initials
//         avatar.style.display = 'flex'; // Show avatar container
//         userNameDisplay.textContent = `Hello, ${username}`; // Show username
//         logoutMenu.style.display = 'none'; // Show logout menu
//         hideLoginButton(); // Hide login button
//     } else {
//         avatar.style.display = 'none'; // Hide avatar container
//         userNameDisplay.textContent = ''; // Clear username display
//         logoutMenu.style.display = 'none'; // Hide logout menu
//         showLoginButton(); // Show login button
//     }
// }

// // Function to open the login modal
// function openLoginModal() {
//     document.getElementById('loginModal').style.display = 'block';
// }

// // Function to close the login modal
// function closeLoginModal() {
//     document.getElementById('loginModal').style.display = 'none';
// }

// // Function to open the register modal
// function openRegisterModal() {
//     document.getElementById('registerModal').style.display = 'block';
// }

// // Function to close the register modal
// function closeRegisterModal() {
//     document.getElementById('registerModal').style.display = 'none';
// }

// // Function to handle login process
// function login() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     var loginData = {
//         username: username,
//         password: password
//     };

//     fetch('http://localhost:8086/login/authenticate', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Invalid username or password');
//         }
//         return response.json();
//     })
//     .then(user => {
//         sessionStorage.setItem('isLoggedIn', 'true');
//         sessionStorage.setItem('username', username);
//         alert('Login successful');
//         closeLoginModal();
//         updateUI(); // Update UI after successful login
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('error-message').style.display = 'block';
//         alert('Login failed');
//     });
// }

// //Function to handle login process
// function register() {
//     var username = document.getElementById('reg-username').value;
//     var password = document.getElementById('reg-password').value;
//     var email = document.getElementById('email').value;

//     var registerData = {
//         username: username,
//         emailId: email,
//         password: password
//     };

//     fetch('http://localhost:8086/login/storeLoginData', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(registerData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Registration failed');
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert('Registration successful');
//         closeRegisterModal();
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('reg-error-message').style.display = 'block';
//         alert('Registration failed');
//     });
// }

// // Function to handle logout
// function logout() {
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('username');
//     updateUI(); // Update UI after logout
// }

// // Function to show avatar with username initials
// function showAvatar(username) {
//     const avatar = document.getElementById('avatar');
//     const avatarText = username.charAt(0).toUpperCase(); // Get the first letter of username
//     avatar.textContent = avatarText;
//     avatar.style.backgroundColor = getRandomColor(); // Set avatar background color
// }

// // Helper function to generate random color for avatar background
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Function to hide login button
// function hideLoginButton() {
//     const loginButton = document.getElementById('loginButton');
//     loginButton.style.display = 'none';
// }

// // Function to show login button
// function showLoginButton() {
//     const loginButton = document.getElementById('loginButton');
//     if (loginButton) {
//         loginButton.style.display = 'block'; // or 'inline-block', depending on your CSS
//     }
// }

// // Function to toggle the logout menu visibility
// function toggleLogoutMenu() {
//     const logoutMenu = document.getElementById('logoutMenu');
//     if (logoutMenu.style.display === 'none') {
//         logoutMenu.style.display = 'block';
//     } else {
//         logoutMenu.style.display = 'none';
//     }
// }

// // Optional: Close modals if clicked outside
// window.onclick = function(event) {
//     const loginModal = document.getElementById('loginModal');
//     const registerModal = document.getElementById('registerModal');
//     if (event.target === loginModal) {
//         closeLoginModal();
//     }
//     if (event.target === registerModal) {
//         closeRegisterModal();
//     }
// };

// // Initial UI setup when the page loads
// window.onload = function() {
//     updateUI(); // Update UI based on initial login state
// };
