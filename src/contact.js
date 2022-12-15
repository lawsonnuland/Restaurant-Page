export function loadContact () {
    const content = document.querySelector('#section');
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    const newContent = document.createElement('div');
    newContent.innerHTML = `
          <h3>Contact Us!</h3>
          <p>Our phone number is 555-555-5555</p>
    `
    content.appendChild(newContent);
}
