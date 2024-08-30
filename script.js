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

    let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let currentImage = 1;
        let random = 1;

        displayRandomImage();

        document.querySelector('.image-container').addEventListener('click', () => {
            displayRandomImage();
        });

        function displayRandomImage() {
            let random2 = Math.floor(Math.random() * 7) + 1;

            while (random2 == random) {
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
        }