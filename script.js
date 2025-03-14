function onMouseMove(event) {
    const x = event.clientX;
    const y = event.clientY;

    // Select the gradient dynamically based on which page is loaded
    const gradient = document.querySelector(".gradient");
    const gradientDesign = document.querySelector(".gradientDesign");
    const gradientEng = document.querySelector(".gradientEng");

    if (gradient) {
        gradient.style.backgroundImage = `radial-gradient(at ${x}px ${y}px, rgba(255, 255, 255, 0) 0, #4D4FA7 60%)`;
    }
    
    if (gradientDesign) {
        gradientDesign.style.backgroundImage = `radial-gradient(at ${x}px ${y}px, rgba(255, 255, 255, 0) 0,rgb(255, 60, 0) 60%)`;
    }

    if (gradientEng) {
        gradientEng.style.backgroundImage = `radial-gradient(at ${x}px ${y}px, rgba(172, 156, 156, 0) 0,rgb(255, 145, 0) 60%)`;
    }
}

// Apply the event listener globally
document.addEventListener("mousemove", onMouseMove);

let slideIndex = 0;
let slides;
let dots;
let autoScroll;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
        slide.style.visibility = i === index ? "visible" : "hidden"; // Ensure correct visibility
        dots[i].classList.toggle("active", i === index);
    });
}

function changeSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
    resetAutoScroll();
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function resetAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(nextSlide, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    slides = document.querySelectorAll(".carousel-item");
    dots = document.querySelectorAll(".dot");
    showSlide(slideIndex);
    autoScroll = setInterval(nextSlide, 3000);
});



const projectData = {
    chess: {
        title: "Chess Set",
        content: `
            <img src="img/Chess.jpeg" alt="Chess Set" style="width:100%; border-radius:10px;">
            <p>A custom-designed, Adventure Time themed chess set. Modeled in SketchUp. Fabricated by laser-cutting, 3d printing, woodworking, and painting.</p>
                <div class="carousel">
                <div class="carousel-images">
                    <img src="img/chess/c1.jpg" class="carousel-item">
                    <img src="img/chess/c2.jpg" class="carousel-item">
                    <img src="img/chess/c3.jpg" class="carousel-item">
                    <img src="img/chess/c4.jpg" class="carousel-item">
                    <img src="img/chess/c5.jpg" class="carousel-item">
                    <img src="img/chess/c6.jpg" class="carousel-item">
                </div>
                <div class="carousel-dots">
                    <span class="dot" onclick="changeSlide(0)"></span>
                    <span class="dot" onclick="changeSlide(1)"></span>
                    <span class="dot" onclick="changeSlide(2)"></span>
                    <span class="dot" onclick="changeSlide(3)"></span>
                    <span class="dot" onclick="changeSlide(4)"></span>
                    <span class="dot" onclick="changeSlide(5)"></span>
                </div>
            </div>

            <a href="https://drive.google.com/file/d/1T_svSR8C0VazzEFE1HMvPV0_nDTS-FvF/view?usp=sharing class = "button" style = "color:white">CAD documentation and more here</a>
        </div>
        `
    
    },
    mug: {
        title: "Knuckles Mug",
        content: `
            <img src="img/mug.jpeg" alt="Knuckles Mug" style="width:100%; border-radius:10px;">
            <p>3D printed mug with kuckles as the handle(badass). Made from scratch in sketchUp</p>
            <img src="img/mug_CAD.png" alt="Mug Close-up" style="width:100%; border-radius:10px;">
        `
    },

    poster: {
        title: "Poster Design",
        content: `
            <img src="img/poster.jpg" style="width:100%; border-radius:10px;">
            <p>Assorted Graphic Design</p>
            <p><br>Colorado Symphony Orchestra Poster Mockup</p>
                            <div class="carousel">
                <div class="carousel-images">
                    <img src="img/coloradoSymphony/cs1.jpg" class="carousel-item">
                    <img src="img/coloradoSymphony/cs2.jpg" class="carousel-item">
                    <img src="img/coloradoSymphony/cs3.jpg" class="carousel-item">
                    <img src="img/coloradoSymphony/cs4.jpg" class="carousel-item">
                </div>
                <div class="carousel-dots">
                    <span class="dot" onclick="changeSlide(0)"></span>
                    <span class="dot" onclick="changeSlide(1)"></span>
                    <span class="dot" onclick="changeSlide(2)"></span>
                    <span class="dot" onclick="changeSlide(3)"></span>
                </div>
            </div>
            <p><br>More random Graphic Design</p>
            <img src="img/morePosters/p1.jpg" style = "boarder-radius:10px; width:70%;">
            <img src="img/morePosters/p2.jpg" style= "boarder-radius:10px; width:70%;">
            <img src="img/morePosters/p3.jpg" style: boarder-radius:10px;>
            <img src="img/morePosters/p4.png" style= "boarder-radius:10px; width:90%;">
            <img src="img/morePosters/p5.png"style = "boarder-radius:10px; width:70%;">
            <img src="img/morePosters/p6.png" style: boarder-radius:10px;>


        `
    },

    hangboard: {
        title: "Hangboard",
        content: `
            <img src="img/hangboard.jpg" style="width:100%; border-radius:10px;">
            <p>Wood scrap + palm router = custom budget hangboard.</p>
                            <div class="carousel">
                <div class="carousel-images">
                    <img src="img/hangboard/hb1.jpg" class="carousel-item">
                    <img src="img/hangboard/hb2.jpg" class="carousel-item">
                    <img src="img/hangboard/hb3.jpg" class="carousel-item">
                    <img src="img/hangboard/hb4.jpg" class="carousel-item">
                    <img src="img/hangboard/hb5.jpg" class="carousel-item">
                    <img src="img/hangboard/hb6.jpg" class="carousel-item">
                    <img src="img/hangboard/hb7.jpg" class="carousel-item">
                    <img src="img/hangboard/hb8.jpg" class="carousel-item">

                </div>
                <div class="carousel-dots">
                    <span class="dot" onclick="changeSlide(0)"></span>
                    <span class="dot" onclick="changeSlide(1)"></span>
                    <span class="dot" onclick="changeSlide(2)"></span>
                    <span class="dot" onclick="changeSlide(3)"></span>
                    <span class="dot" onclick="changeSlide(4)"></span>
                    <span class="dot" onclick="changeSlide(5)"></span>
                    <span class="dot" onclick="changeSlide(6)"></span>
                    <span class="dot" onclick="changeSlide(7)"></span>

                </div>
            </div>

        `
    },

    v1: {
        title: "Wakeup3000 v1",
        content: `
            <img src="img/v1.jpeg" style="width:100%; border-radius:10px;">
            <p>Fool Proof alarm clock... kinda</p>
        `
    },

    v2: {
        title: "wakeup3000 v2",
        content: `
            <img src="img/v2.jpeg" style="width:100%; border-radius:10px;">
            <a href="https://drive.google.com/file/d/1bsxKGXP4pJF9OvWVYRgQgIMmUN5k32A3/view?usp=sharing class = "button" style = "color:white">Full documentation here (long)</a>
        `
    },

    beatseat: {
        title: "beatseat",
        content: `
            <img src="img/beatseat.jpeg" style="width:100%; border-radius:10px;">
            <p>Chair attachment created for people with physical and/or intellectual disabilities
            to help them play music.</p>
        `
    },

    alt: {
        title: "Alt Controller Game",
        content: `
        <p>Custom alternative controller demonstration.</p>
        <div style="display: flex; justify-content: center;">
            <video controls style="width: auto; max-width: 100%; height: 80vh; object-fit: contain; border-radius: 10px;">
                <source src="img/altController.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    `
}};

function openModal(projectKey) {
    document.getElementById("modal-body").innerHTML = projectData[projectKey].content;
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden"; // Lock scrolling on background

    // Reinitialize carousel after content is inserted
    slides = document.querySelectorAll(".carousel-item");
    dots = document.querySelectorAll(".dot");
    slideIndex = 0; // Reset to first image
    showSlide(slideIndex);

    // Restart auto-scroll
    clearInterval(autoScroll);
    autoScroll = setInterval(nextSlide, 3000);

    
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal if clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal();
    }
};
