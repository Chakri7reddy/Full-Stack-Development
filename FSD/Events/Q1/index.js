// Function to handle all events
function handleEvent(event) {
    const buttonId = event.target.id;
    const messageId = 'message' + buttonId.replace('button', '');

    switch (event.type) {
        case 'click':
            event.target.style.backgroundColor = 'lightblue';
            break;
        case 'mouseover':
            document.getElementById(messageId).style.display = 'block';
            break;
        case 'mouseout':
            document.getElementById(messageId).style.display = 'none';
            break;
        case 'dblclick':
            event.target.style.display = 'none';
            break;
    }
}

// Function to attach event listeners to a button
function attachEventListeners(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', handleEvent);
    button.addEventListener('mouseover', handleEvent);
    button.addEventListener('mouseout', handleEvent);
    button.addEventListener('dblclick', handleEvent);
}

// Attaching event listeners to each button
attachEventListeners('button1');
attachEventListeners('button2');
attachEventListeners('button3');
