/* ===== Start Portfolio ===== */

let row = document.getElementById("portfolioRow");
let modelIds = ['exampleModalLabelOne', 'exampleModalLabelTwo', 'exampleModalLabelThree', 'exampleModalLabelFour', 'exampleModalLabelFive', 'exampleModalLabelSix'];
let modelCardHeader = ["One", "Two", "Three", "Four", "Five", "Six"];
let modelCardImgs = ['img/1.jpg" class="card-img-top', 'img/2.jpg" class="card-img-top', 'img/3.jpg" class="card-img-top', 'img/4.jpg" class="card-img-top', 'img/5.jpg" class="card-img-top', 'img/6.jpg" class="card-img-top'];
let modelCard = '';

// Add Card Model
for (let i = 0; i <= 5; i++) {

    modelCard +=
    `<div class="col-12 col-md-6 col-lg-4">

        <!-- Button trigger modal -->
        <button type="button" id="btnModel" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modelIds[i]}">
        
            <div class="card">
                <figure class="project-img position-relative">
                    <div class="overlay position-absolute w-100 h-100"></div>
                    <img src="${modelCardImgs[i]}" alt="clock-img" loading="lazy">
                </figure>
                <i class="fa-solid fa-image position-absolute fs-5"></i>
            </div>
            
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="${modelIds[i]}" tabindex="-1" aria-labelledby="${modelIds[i]}" aria-hidden="true">
            <div class="modal-dialog">

                <div class="modal-content">

                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${modelIds[i]}">Project ${modelCardHeader[i]}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <img src="${modelCardImgs[i]}" loading="lazy" class="w-100 rounded-2">
                        <p class="model-body-txt mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab perspiciatis et, voluptas esse ex expedita atque. Impedit porro eveniet, culpa rerum in doloremque velit perspiciatis doloribus ratione. Nobis, nisi, quasi.</p>
                        <ul class="project-info list-unstyled">
                            <li class="pro-info-data">
                                <i class="icon fa-solid fa-user"></i>
                                <span class="txt">Alex Smith</span>
                            </li>
                            <li class="pro-info-data">
                                <i class="icon fa-solid fa-earth-americas"></i>
                                <span class="txt">www.example.com</span>
                            </li>
                            <li class="pro-info-data">
                                <i class="icon fa-solid fa-calendar-days"></i>
                                <time datetime="2025-8-15" class="txt">15 August 2025</time>
                            </li>
                        </ul>
                    </div>

                    <div class="modal-footer flex-column align-items-start">
                        <h5 class="model-footer-head">Share</h5>
                        <ul class="social list-unstyled d-flex">
                            <li class="icon"><i class="fa-brands fa-facebook-f"></i></li>
                            <li class="icon"><i class="fa-brands fa-twitter"></i></li>
                            <li class="icon"><i class="fa-brands fa-linkedin-in"></i></li>
                            <li class="icon"><i class="fa-brands fa-github"></i></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>

    </div>`

}

row.innerHTML = modelCard;

/* ===== End Portfolio ===== */