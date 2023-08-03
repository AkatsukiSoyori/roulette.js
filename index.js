// let wheel1 = document.querySelector('#roulette1');
// let wheel2 = document.querySelector('#roulette2');
// let spinBtn1 = document.querySelector('.spinBtn');
// let value1 = Math.ceil(Math.random() * 3600);

// spinBtn1.onclick = function(){
//     wheel1.style.transform = "rotate(" + value1 + "deg)";
//     value1 += Math.ceil(Math.random() * 3600);
// }

// function addOptions() {
//     const inputField = document.getElementById("inputField");
//     const options = inputField.value.split(",").map(option => option.trim());

//     const rouletteList2 = document.getElementById("rouletteList2");
//     rouletteList2.innerHTML = "";

//     for (let i = 0; i < options.length; i++) {
//         const option = options[i];
//         const numberElement = document.createElement("div");
//         numberElement.className = "number";
//         numberElement.style.setProperty("--i", i + 1);
//         numberElement.style.setProperty("--clr", getRandomColor());
//         numberElement.innerHTML = `<span>${option}</span>`;
//         rouletteList2.appendChild(numberElement);
//     }

//     inputField.value = "";
// }

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let resultValue = document.getElementById('resultValue');
let value = Math.ceil(Math.random() * 3600);
let audio = new Audio('Audio/roue_fortune.wav'); // Remplacez 'url_du_fichier_audio.wav' par le chemin vers votre fichier audio

spinBtn.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);

    // Mettre à jour le résultat après 5 secondes (même durée que la transition)
    setTimeout(() => {
        let resultIndex = Math.floor(value % 360 / 45); // Index de l'option gagnante (de 0 à 7)
        let options = document.querySelectorAll('.number span');
        resultValue.textContent = options[resultIndex].textContent;
        playSound(); // Appeler la fonction pour jouer le son
    }, 5000);
}

function playSound() {
    audio.play();
}
