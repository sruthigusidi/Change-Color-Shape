
document.addEventListener("DOMContentLoaded", function () {
    const colorButton = document.querySelector(".style-5");
    const shapeButton = document.querySelector(".style-6");
    const outerCircle = document.querySelector(".style-2");
    const innerDiv = document.querySelector(".style-3");

    const colors = [
        "red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "brown", "gray"
    ];

    const shapes = [
        { borderRadius: "0" }, // Square
        { borderRadius: "50%" }, // Circle
        { borderRadius: "25%" }, // Rounded corners
        { borderRadius: "10%" }, // Slightly rounded corners
        { borderRadius: "60% 40% 60% 40%" }, // Unique rounded shape
        { borderRadius: "50% 20% 50% 20%" }, // Another unique shape
        { borderRadius: "50% 50% 0 0 / 50% 50% 0 0" }, // Diamond
        { clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }, // Triangle
        { transform: "rotate(45deg)", borderRadius: "0" }, // Rhombus
        { borderRadius: "50% 30% 50% 30%" }, // Star-like shape
        { clipPath: "polygon(25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%, 0% 25%, 25% 25%)" }, // Cross
        { clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }, // Parallelogram
        { clipPath: "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }, // Square in square
        { clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }, // Up arrow
        { clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }, // Down arrow
        { clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)" }, // Left arrow
        { clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" } // Right arrow
    ];
    
    let shapeIndex = 0;
    
    shapeButton.addEventListener("click", function () {
        const shape = shapes[shapeIndex];
        innerDiv.style.borderRadius = shape.borderRadius || "";
        innerDiv.style.clipPath = shape.clipPath || "";
        innerDiv.style.transform = shape.transform || "";
        shapeIndex = (shapeIndex + 1) % shapes.length;
    });
    

    colorButton.addEventListener("click", function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        outerCircle.style.backgroundColor = randomColor;
    });

    // shapeButton.addEventListener("click", function () {
    //     shapeIndex = (shapeIndex + 1) % shapes.length;
    //     innerDiv.style.borderRadius = shapes[shapeIndex];
    // });
});
