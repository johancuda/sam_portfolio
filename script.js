
// Ici tu rajoutes une ligne par image pour définir le texte :
// par ex: {name:"numéroImage.jpg", text:"le texte de l'image", fontcolor:"couleur du texte"},
// ne pas oublier la virgule à la fin!
const img_list = [
    {name:"1.jpg", text:"un test de text", fonctcolor: "white"},
    {name:"2.jpg", text:"un test de cerise", fonctcolor: "white"},
    {name:"3.jpg", text:"un test de pomme", fonctcolor: "white"},
    {name:"4.jpg", text:"un test de mangue", fonctcolor: "white"},
    {name:"5.jpg", text:"un test de poire", fonctcolor: "white"},
    {name:"6.jpg", text:"un test de tomate", fonctcolor: "white"},
    {name:"7.jpg", text:"un test de poireau", fonctcolor: "white"},
    //{name:"8.jpg", text:"un test de banane", fonctcolor: "white"},  // par exemple
 ]


let div = document.querySelector(".bottom-center-div")

    let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let currentImage = 1;
        let random = 1;

        displayRandomImage();

        document.querySelector('.image-container').addEventListener('click', () => {
            displayRandomImage();
        });

        function displayRandomImage() {
            // Ici changer le "7" en le nombre d'image que tu as
            let random2 = Math.floor(Math.random() * 7) + 1;

            while (random2 == random) {
                // Ici changer le "7" en le nombre d'image que tu as
                random2 = Math.floor(Math.random() * 7) + 1;
            }

            random = random2;

            let newImage = currentImage === 1 ? image2 : image1;
            let oldImage = currentImage === 1 ? image1 : image2;

            newImage.src = `img/${random}.jpg`;

            newImage.onload = () => {
                newImage.style.opacity = 1; // Fade in new image
                oldImage.style.opacity = 0; // Fade out old image
                currentImage = currentImage === 1 ? 2 : 1; // Swap current image reference
            };
            div.innerHTML = img_list[random-1].text
        }





// ##################################  À laisser en dessous pour l'instant #########################################




/* let image = document.body.querySelector('img');

let random = 1

displayRandomImage()

image.addEventListener('click', () => {

    image.style.opacity = 0; // Start fade out
    setTimeout(displayRandomImage, 100); // Wait for the fade-out to complete before changing the image

})



function displayRandomImage(){

    let random2 = Math.floor(Math.random()*7)+1

    while(random2 == random) {
        random2 = Math.floor(Math.random()*7)+1
    }

    random = random2

    image.setAttribute('src', `img/${random}.jpg`)

    image.onload = () => {
        image.style.opacity = 1; // Fade in the new image after it's loaded
    };

} */