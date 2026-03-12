// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API.
// Write your code below.

//Get profile elements
const myname = document.getElementById('name');
const myemail = document.getElementById('email');
const myaddress = document.getElementById('address');
const myage = document.getElementById('age');
const curavatar = document.querySelector('.profile img, .card img');

const nextBtn = document.getElementById('next-profile-btn');


// Function to fetch random user
async function getUser() {

    try {

        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        const user = data.results[0];

        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const location = `${user.location.city}, ${user.location.state}`;
        const age = user.dob.age;
        const picture = user.picture.large;

        myname.textContent = fullName;
        myemail.textContent = email;
        myaddress.textContent = location;
        myage.textContent = age;
        curavatar.src = picture;

    } catch (error) {
        console.error("Error fetching user:", error);
    }

}

// Add event listener to the Next Profile button
nextBtn.addEventListener("click", getUser);

// Load first user on page load
document.addEventListener("DOMContentLoaded", getUser);

