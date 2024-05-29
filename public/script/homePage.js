function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

fetch('/api/user')
.then(response => response.json())
.then(data => {
    const usernamePlaceholder = document.getElementById('username-placeholder');
    if (data.user) {
        usernamePlaceholder.innerText = `${data.user.name}`;
    } else {
        usernamePlaceholder.innerText = 'Hello, Guest';
    }
})
.catch(error => console.error('Error fetching user data:', error));


fetch('/api/user')
.then(response => response.json())
.then(data => {
    const usernamePlaceholder = document.getElementById('username-placeholder1');
    if (data.user) {
        usernamePlaceholder.innerText = `${data.user.name}`;
    } else {
        usernamePlaceholder.innerText = 'Hello, Guest';
    }
})
.catch(error => console.error('Error fetching user data:', error));


