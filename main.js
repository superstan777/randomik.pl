const generateButton = document.getElementById("button");
const fullname = document.getElementById("fullname");
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const photo = document.getElementById('photo');

const api = 'https://randomuser.me/api/?inc=name,email,phone,picture&noinfo';

generateButton.onclick = () => {
  fetch(api).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    fullname.textContent = `${jsonResponse.results[0].name.first} ${jsonResponse.results[0].name.last}`;
    email.textContent = `${jsonResponse.results[0].email}`;
    phone.textContent = `${jsonResponse.results[0].phone}`;
    photo.src = `${jsonResponse.results[0].picture.large}`;
  });
};
