// Placeholder bot logic
console.log("Jstris bot started...");

function pressKey(key) {
    const event = new KeyboardEvent("keydown", { key });
    document.dispatchEvent(event);
}

// Example: pressKey("ArrowLeft");