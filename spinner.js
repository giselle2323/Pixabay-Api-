const spinner = document.getElementById("spinner");
const dataSection = document.getElementById("data");
const dataColumn = document.getElementById("data-column");
const mybutton = document.getElementById("scrollBtn");
let getPicsBtn = document.getElementById("intro-button");
function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
        spinner.className = spinner.className.replace("show", "");
    }, 5000);
}

function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}

function searchRover() {
    getPicsBtn.innerText = "Loading......";
    dataColumn.className = dataColumn.className.replace("data-column-two", "data-class")
    fetch('https://pixabay.com/api/?key=10841974-81bbf55d6105ea4bf3b851162&q=yellow+flowers&image_type=photo&pretty=true', {
        method: 'GET'
    }).then((res) => res.json())
        .then((data) => {
                const results = data.hits;
                results.map(image => {
                    document.getElementById("data").innerHTML+=`
                    <div class="col-md-4 py-2"">
                        <div class="card mt-4 h-100 text-white bg-dark">
                            <img class="card-img-top" src=${image.webformatURL} alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">${image.tags}</h5>
                             <h5 class="card-title">${image.type}</h5>
                            <p class="card-text">Look and think before opening the shutter. The heart and mind are the true lens of the camera.</p>
                            <a href=${image.largeImageURL} class="btn btn-outline-light btn-sm">See Full Image</a>
                            </div>
                        </div>
                    </div>`;
                })
            dataSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            getPicsBtn.innerText = "Get Images";
        }
       
        )
        .catch((err) => console.log(err)) 
}

//Number is in pixels
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}