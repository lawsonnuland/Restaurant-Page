export function loadStory () {
    const content = document.querySelector('#section');
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    const newContent = document.createElement('div');
    newContent.innerHTML = `
          <h3>Our Story</h3>
          <p>I made pizza from a very young age! No matter what ingredients I had on hand, or even if I had no ingredients at all, pizza would appear! The rest is history.</p>
        
    `
    content.appendChild(newContent);
}
