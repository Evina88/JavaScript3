// Let's make a randomized dog photo gallery!

// Write a function that makes an API call to https://dog.ceo/api/breeds/image/random. It should trigger after clicking a
// button in your webpage.Every time the button is clicked it should append a new dog image to the DOM.

// Create an index.html file that will display your random image
// Add 2 < button > and 1 < ul > element, either in the HTML or through JavaScript
// Write two versions for the button functionality: one with XMLHttpRequest, and the other with axios
// When any one of the 2 buttons is clicked it should make an API call to https://dog.ceo/api/breeds/image/random
// After receiving the data, append to the < ul > a < li > that contains an < img > element with the dog image
// Incorporate error handling

let btn = document.getElementById("showImgBttn").addEventListener('click', loadImg);

function loadImg() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let url = JSON.parse(xhttp.responseText);
            console.log(url.message);
            document.getElementById("randomPic").src = url.message;
        }
    };
    xhttp.open("GEt", "https://dog.ceo/api/breeds/image/random", true);
    xhttp.send();
}

let getImg = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
        console.log(response.data.message);
        document.getElementById("randomPicAxios").src = response.data.message;
    });
};


let btn2 = document.getElementById("showImgAxios").addEventListener("click", getImg);
