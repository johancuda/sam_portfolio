





// Ici tu rajoutes une ligne par image pour définir le texte :
// par ex: {name:"numéroImage.jpg", text:"le texte de l'image", fontcolor:"couleur du texte"},
// ne pas oublier la virgule à la fin!
const img_list = [
    {name: "1.jpg", text: "un test <a href='https://feroxbooks.ch'>Ferox</a> de text", fonctcolor: "white"},
    {name: "2.jpg", text: "un test <a href='https://feroxbooks.ch'>Ferox</a> de cerise", fonctcolor: "white"},
    {name: "3.jpg", text: "un test <a href='https://feroxbooks.ch'>Ferox</a> de pomme", fonctcolor: "white"},
    {name: "4.jpg", text: "un test de mangue", fonctcolor: "white"},
    {name: "5.jpg", text: "un test de poire", fonctcolor: "white"},
    {name: "6.jpg", text: "un test de tomate", fonctcolor: "white"},
    {name: "7.jpg", text: "un test de poireau", fonctcolor: "white"},
    {name: "8.jpg", text: "un test de fraise", fonctcolor: "white"},
    {name: "9.jpg", text: "un test de banane", fonctcolor: "white"},
    {name: "10.jpg", text: "un test de pêche", fonctcolor: "white"},
    {name: "11.jpg", text: "un test de raisin", fonctcolor: "white"},
    {name: "12.jpg", text: "un test de figue", fonctcolor: "white"},
    {name: "13.jpg", text: "un test de melon", fonctcolor: "white"},
    {name: "14.jpg", text: "un test de pastèque", fonctcolor: "white"},
    {name: "15.jpg", text: "un test de kiwi", fonctcolor: "white"},
    {name: "16.jpg", text: "un test de ananas", fonctcolor: "white"},
    {name: "17.jpg", text: "un test de avocat", fonctcolor: "white"},
    {name: "18.jpg", text: "un test de citron", fonctcolor: "white"},
    {name: "19.jpg", text: "un test de orange", fonctcolor: "white"},
    {name: "20.jpg", text: "un test de pamplemousse", fonctcolor: "white"},
    {name: "21.jpg", text: "un test de abricot", fonctcolor: "white"},
    {name: "22.jpg", text: "un test de prune", fonctcolor: "white"},
    {name: "23.jpg", text: "un test de grenade", fonctcolor: "white"},
    {name: "24.jpg", text: "un test de coco", fonctcolor: "white"},
    {name: "25.jpg", text: "un test de item 25", fonctcolor: "white"},
    {name: "26.jpg", text: "un test de item 26", fonctcolor: "white"},
    {name: "27.jpg", text: "un test de item 27", fonctcolor: "white"},
    {name: "28.jpg", text: "un test de item 28", fonctcolor: "white"},
    {name: "29.jpg", text: "un test de item 29", fonctcolor: "white"},
    {name: "30.jpg", text: "un test de item 30", fonctcolor: "white"},
    {name: "31.jpg", text: "un test de item 31", fonctcolor: "white"},
    {name: "32.jpg", text: "un test de item 32", fonctcolor: "white"},
    {name: "33.jpg", text: "un test de item 33", fonctcolor: "white"},
    {name: "34.jpg", text: "un test de item 34", fonctcolor: "white"},
    {name: "35.jpg", text: "un test de item 35", fonctcolor: "white"},
    {name: "36.jpg", text: "un test de item 36", fonctcolor: "white"},
    {name: "37.jpg", text: "un test de item 37", fonctcolor: "white"},
    {name: "38.jpg", text: "un test de item 38", fonctcolor: "white"},
    {name: "39.jpg", text: "un test de item 39", fonctcolor: "white"},
    {name: "40.jpg", text: "un test de item 40", fonctcolor: "white"},
    {name: "41.jpg", text: "un test de item 41", fonctcolor: "white"},
    {name: "42.jpg", text: "un test de item 42", fonctcolor: "white"},
    {name: "43.jpg", text: "un test de item 43", fonctcolor: "white"},
    {name: "44.jpg", text: "un test de item 44", fonctcolor: "white"},
    {name: "45.jpg", text: "un test de item 45", fonctcolor: "white"},
    {name: "46.jpg", text: "un test de item 46", fonctcolor: "white"},
    {name: "47.jpg", text: "un test de item 47", fonctcolor: "white"},
    {name: "48.jpg", text: "un test de item 48", fonctcolor: "white"},
    {name: "49.jpg", text: "un test de item 49", fonctcolor: "white"},
    {name: "50.jpg", text: "un test de item 50", fonctcolor: "white"},
    {name: "51.jpg", text: "un test de item 51", fonctcolor: "white"},
    {name: "52.jpg", text: "un test de item 52", fonctcolor: "white"},
    {name: "53.jpg", text: "un test de item 53", fonctcolor: "white"},
    {name: "54.jpg", text: "un test de item 54", fonctcolor: "white"},
    {name: "55.jpg", text: "un test de item 55", fonctcolor: "white"},
    {name: "56.jpg", text: "un test de item 56", fonctcolor: "white"},
    {name: "57.jpg", text: "un test de item 57", fonctcolor: "white"},
    {name: "58.jpg", text: "un test de item 58", fonctcolor: "white"},
    {name: "59.jpg", text: "un test de item 59", fonctcolor: "white"},
    {name: "60.jpg", text: "un test de item 60", fonctcolor: "white"},
    {name: "61.jpg", text: "un test de item 61", fonctcolor: "white"},
    {name: "62.jpg", text: "un test de item 62", fonctcolor: "white"},
    {name: "63.jpg", text: "un test de item 63", fonctcolor: "white"},
    {name: "64.jpg", text: "un test de item 64", fonctcolor: "white"},
    {name: "65.jpg", text: "un test de item 65", fonctcolor: "white"},
    {name: "66.jpg", text: "un test de item 66", fonctcolor: "white"},
    {name: "67.jpg", text: "un test de item 67", fonctcolor: "white"},
    {name: "68.jpg", text: "un test de item 68", fonctcolor: "white"},
    {name: "69.jpg", text: "un test de item 69", fonctcolor: "white"},
    {name: "70.jpg", text: "un test de item 70", fonctcolor: "white"},
    {name: "71.jpg", text: "un test de item 71", fonctcolor: "white"},
    {name: "72.jpg", text: "un test de item 72", fonctcolor: "white"},
    {name: "73.jpg", text: "un test de item 73", fonctcolor: "white"},
    {name: "74.jpg", text: "un test de item 74", fonctcolor: "white"},
    {name: "75.jpg", text: "un test de item 75", fonctcolor: "white"},
    {name: "76.jpg", text: "un test de item 76", fonctcolor: "white"},
    {name: "77.jpg", text: "un test de item 77", fonctcolor: "white"},
    {name: "78.jpg", text: "un test de item 78", fonctcolor: "white"},
    {name: "79.jpg", text: "un test de item 79", fonctcolor: "white"},
    {name: "80.jpg", text: "un test de item 80", fonctcolor: "white"},
    {name: "81.jpg", text: "un test de item 81", fonctcolor: "white"},
    {name: "82.jpg", text: "un test de item 82", fonctcolor: "white"},
    {name: "83.jpg", text: "un test de item 83", fonctcolor: "white"},
    {name: "84.jpg", text: "un test de item 84", fonctcolor: "white"},
    {name: "85.jpg", text: "un test de item 85", fonctcolor: "white"},
    {name: "86.jpg", text: "un test de item 86", fonctcolor: "white"},
    {name: "87.jpg", text: "un test de item 87", fonctcolor: "white"},
    {name: "88.jpg", text: "un test de item 88", fonctcolor: "white"},
    {name: "89.jpg", text: "un test de text", fonctcolor: "white"},
    {name: "90.jpg", text: "un test de cerise", fonctcolor: "white"},
    {name: "91.jpg", text: "un test de pomme", fonctcolor: "white"},
    {name: "92.jpg", text: "un test de mangue", fonctcolor: "white"},
    {name: "93.jpg", text: "un test de poire", fonctcolor: "white"},
    {name: "94.jpg", text: "un test de tomate", fonctcolor: "white"},
    {name: "95.jpg", text: "un test de poireau", fonctcolor: "white"},
    {name: "96.jpg", text: "un test de fraise", fonctcolor: "white"},
    {name: "97.jpg", text: "un test de banane", fonctcolor: "white"},
    {name: "98.jpg", text: "un test de pêche", fonctcolor: "white"},
    {name: "99.jpg", text: "un test de raisin", fonctcolor: "white"},
    {name: "100.jpg", text: "un test de figue", fonctcolor: "white"},
    {name: "101.jpg", text: "un test de figue", fonctcolor: "white"},
    {name: "102.jpg", text: "un test de figue", fonctcolor: "white"},
    {name: "103.jpg", text: "un test de figue", fonctcolor: "white"},
    {name: "104.jpg", text: "un test de figue", fonctcolor: "white"},
    {name: "105.jpg", text: "un test de figue", fonctcolor: "white"},
    {name: "106.jpg", text: "un test de figue", fonctcolor: "white"},
 ]

 img_list.forEach(element => {
    element.text = ''
    
 });

// Div pour le texte
let div = document.querySelector(".bottom-center-div")

// Images
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let currentImage = 1;
let random = 1;

// Appel pour avoir une image au lancement
displayRandomImage();

document.querySelector('.image-container').addEventListener('click', () => {
    displayRandomImage();
});

// Fonction pour fondu et changement d'image
function displayRandomImage() {
    let random2 = Math.floor(Math.random() * img_list.length) + 1;

    while (random2 == random) {
        random2 = Math.floor(Math.random() * img_list.length) + 1;
    }

    random = random2;

    let newImage = currentImage === 1 ? image2 : image1;
    let oldImage = currentImage === 1 ? image1 : image2;

    newImage.src = `./img/${random}.jpg`;

    newImage.onload = () => {
        newImage.style.opacity = 1; // Fade in new image
        oldImage.style.opacity = 0; // Fade out old image
        currentImage = currentImage === 1 ? 2 : 1; // Swap current image reference
    };
    div.innerHTML = img_list[random-1].text
}

