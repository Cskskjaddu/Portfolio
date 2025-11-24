

console.log("Nothing OS Portfolio Loaded");

const modelContainer = document.getElementById('model-3d-viewer');

if (modelContainer) {
    modelContainer.addEventListener('mouseenter', () => {
        modelContainer.style.borderColor = '#D71921'; 
    });

    modelContainer.addEventListener('mouseleave', () => {
        modelContainer.style.borderColor = '#ffffff'; 
}