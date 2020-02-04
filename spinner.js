const spinner = document.getElementById("spinner");
function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
        spinner.className = spinner.className.replace("show", "");
    }, 5000);
}

function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}

function loadData() {
    showSpinner()
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            hideSpinner()
            console.log(data)
        });
}
function searchRover() {
    showSpinner()
    fetch('https://pixabay.com/api/?key=10841974-81bbf55d6105ea4bf3b851162&q=yellow+flowers&image_type=photo&pretty=true', {
        method: 'GET',
        // mode: 'no-cors'
        // headers: new Headers({
        //     "Content-Type": "application/json"
        //     // 'Access-Control-Allow-Origin': '*'
        // })
    }).then((res) => res.json())
        .then((data) => {
                const results = data.hits;
                console.log(results);
                results.map(image => {
                    document.getElementById("data").innerHTML+=`
                    <div class="col-md-4 py-2"">
                        <div class="card mt-4 h-100 text-white bg-dark">
                            <img class="card-img-top" src=${image.largeImageURL} alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">${image.tags}</h5>
                             <h5 class="card-title">${image.type}</h5>
                            <p class="card-text">Look and think before opening the shutter. The heart and mind are the true lens of the camera.</p>
                            <a href=${image.largeImageURL} class="btn btn-outline-light btn-sm">See Full Image</a>
                            </div>
                        </div>
                    </div>`;
                    console.log(image)
                })
        }
       
        )
        .catch((err) => console.log(err)) 
}