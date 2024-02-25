
let button = document.getElementById("btn").addEventListener("click", getposts)
let parent = document.getElementById('main');
let button2 = document.getElementById("btn2").addEventListener("click", removeData)
function removeData() {
    parent.innerHTML = ""
}
function getposts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(Items => {
            Items.forEach(item => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${item["id"]}/comments`)
                .then(response=>response.json())
                .then(values=>{
                    parent.innerHTML += `<div class="col-3 mt-4">
                                        <div class="card" style="width: 18rem">
                                            <div class="card-body">
                                                <h5 class="card-title">${item["title"]}</h5>
                                                <p class="card-text">${item["body"]}</p>
                                                <div class="dropdown">  
                                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Show Comment
                                                </button>
                                                <ul class="dropdown-menu" style="background-color: antiquewhite" >
                                                    <li><a class="dropdown-item" href="`+ link + `">Name1: ${values[0].name}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">mail1: ${values[0].email}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">body1: ${values[0].body}</a></li>
                                                    <li><hr class="dropdown-divider"></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">Name2: ${values[1].name}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">mail2: ${values[1].email}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">body2: ${values[1].body}</a></li>
                                                    <li><hr class="dropdown-divider"></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">Name3: ${values[2].name}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">mail3: ${values[2].email}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">body3: ${values[2].body}</a></li>
                                                    <li><hr class="dropdown-divider"></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">Name4: ${values[3].name}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">mail4: ${values[3].email}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">body4: ${values[3].body}</a></li>
                                                    <li><hr class="dropdown-divider"></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">Name5: ${values[4].name}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">mail5: ${values[4].email}</a></li>
                                                    <li><a class="dropdown-item" href="`+ link + `">body5: ${values[4].body}</a></li>
                                                </ul>
                                                </div>                                           
                                            </div>
                                        </div>
                                    </div>`
                })
                let link = `https://jsonplaceholder.typicode.com/posts/${item["id"]}/comments`
                

            });
        })

}
