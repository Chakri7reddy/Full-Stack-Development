// DOMContentLoaded ensures that the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // getElementById: Select the heading by its ID and change its text content
    const heading = document.getElementById('main-heading');
    heading.textContent = 'Updated Heading Text';

    // getElementsByClassName: Select all paragraphs with the class 'text-content' and change their text color
    const textContentParagraphs = document.getElementsByClassName('text-content');
    for (let paragraph of textContentParagraphs) {
        paragraph.style.color = 'blue';
    }

    // querySelector: Select the container div by its class name and change its background color
    const containerDiv = document.querySelector('.container');
    containerDiv.style.backgroundColor = '#f0f0f0';

    // querySelectorAll: Select all paragraphs inside the container div and update their text content
    const containerParagraphs = containerDiv.querySelectorAll('p');
    containerParagraphs.forEach((paragraph, index) => {
        paragraph.textContent = `Updated Paragraph ${index + 1} in Container`;
    });

    // Select the image by its ID and change its source
    const mainImage = document.getElementById('main-image');
    mainImage.src = 'https://via.placeholder.com/200';
});
//By Lokireddy Chakri dhar Reddy