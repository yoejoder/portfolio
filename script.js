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




const projectData = {
    chess: {
        title: "Chess Set",
        content: `
            <img src="img/Chess.jpeg" alt="Chess Set" style="width:100%; border-radius:10px;">
            <p>A custom-designed, Adventure Time themed chess set. Modeled in SketchUp. Fabricated by laser-cutting, 3d printing, woodworking, and painting.</p>
        `
    },
    mug: {
        title: "Knuckles Mug",
        content: `
            <img src="img/mug.jpeg" alt="Knuckles Mug" style="width:100%; border-radius:10px;">
            <p>3D printed mug inspired by Knuckles from Sonic.</p>
            <img src="mug_closeup.jpg" alt="Mug Close-up" style="width:100%; border-radius:10px;">
        `
    },

    poster: {
        title: "Poster Design",
        content: `
            <img src="img/poster.jpg" style="width:100%; border-radius:10px;">
            <p>3D printed badass mug.</p>
            
        `
    },

    hangboard: {
        title: "Hangboard",
        content: `
            <img src="img/hangboard.jpg" style="width:100%; border-radius:10px;">
            <p>Wood scrap + palm router = custom budget hangboard.</p>
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
            <p>Wood scrap + palm router = custom budget hangboard..</p>
        `
    },

    beatseat: {
        title: "beatseat",
        content: `
            <img src="img/beatseat.jpeg" style="width:100%; border-radius:10px;">
            <p>Wood scrap + palm router = custom budget hangboard..</p>
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
