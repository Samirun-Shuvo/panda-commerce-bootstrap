const h2Tags = document.getElementsByTagName('h2');
for (const h2tag of h2Tags) {
    h2tag.style.color = "lightblue";
}

const shoesSection = document.getElementById('shoes');
shoesSection.style.backgroundColor = "tomato";
shoesSection.style.borderRadius = "10px";

const backPackSection = document.getElementById('backpack');
backPackSection.style.backgroundColor = "tomato";
backPackSection.style.borderRadius = "10px";

const cardRadiouses = document.getElementsByClassName('card');
for (const cardRadious of cardRadiouses) {
    cardRadious.style.borderRadius = "30px";
}

function createAccountHere() {
    console.log('Are You want to Create an account???');
}

const pandaBuyButtons = document.getElementsByClassName('pandaBuy');
for (const pandaBuyButton of pandaBuyButtons) {
    pandaBuyButton.addEventListener('click', function (events) {
        event.target.parentNode.removeChild(event.target);
    })
}

document.getElementById('subcribeByEmail').addEventListener('keyup', function (event) {
    const subcribe = document.getElementById('subcribe-btn');
    if (event.target.value == 'email') {
        subcribe.removeAttribute('disabled');
        console.log(event.target.value);
        subcribe.addEventListener('click', function () {
            console.log('subcribed');
        })
    } else {
        subcribe.setAttribute('disabled', true);
    }

})