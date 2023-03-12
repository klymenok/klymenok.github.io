const features = [
    {
        title: "Dancing",
        description: "Dancing description",
        image: "https://media.giphy.com/media/tczJoRU7XwBS8/giphy.gif"
    },
    {
        title: "Failing",
        description: "Failing description",
        image: "https://media.giphy.com/media/N8wR1WZobKXaE/giphy.gif",
    },
    {
        title: "Music",
        description: "Music description",
        image: "https://media.giphy.com/media/iLsDDqQYZJWpy/giphy.gif",
    }
]

let currentFeature = 0

const updateFeature = (index) => {
    document.getElementById('feature-title').innerText = features[index].title;
    document.getElementById('feature-image').src = features[index].image;
    document.getElementById('feature-description').innerText = features[index].description;
}

// init feature content
updateFeature(currentFeature);

// add button event listeners

document.getElementById('left').onclick = (e) => {
    currentFeature = currentFeature === 0 ? features.length - 1 : currentFeature - 1;
    updateFeature(currentFeature);
}

document.getElementById('right').onclick = (e) => {
    currentFeature = currentFeature === features.length - 1 ? 0 : currentFeature + 1;
    updateFeature(currentFeature);
}


// document.getElementById('robot-form').onsubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = {
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         phone: form.elements.phone.value,
//         gender: form.elements.gender.value,
//         password: form.elements.password.value,
//     }
//     console.log(formData);
//
// }