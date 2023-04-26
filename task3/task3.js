function randomBackground(){
    let images = [
"./images/serjan-midili-YtS-zQx0-Ag-unsplash.jpg",
"./images/mason-field-TaHWuzdpcg0-unsplash.jpg",
"./images/khanh-lam-jAWAs255LO8-unsplash.jpg",
"./images/jc-gellidon-4OcQmlK2Los-unsplash.jpg",
"./images/artem-stoliar-_a33bgpBCdg-unsplash.jpg"
    ]
    let randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = "url('" + images[randomIndex] + "')";
    document.body.style.backgroundRepeat= "no-repeat"
    document.body.style.backgroundPosition= "center"
    document.body.style.backgroundSize= "100% 100%"
    document.body.style.height= "100vh"
    document.body.style.position= "relative"

}
randomBackground()