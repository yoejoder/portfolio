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
