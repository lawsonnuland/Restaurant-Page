export function loadMenu () {
    const content = document.querySelector('#section');
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    const newContent = document.createElement('div');
    newContent.innerHTML = `
          <h3>Our Menu</h3>
          <ul>
            <li>Pizza</li>
            <li>Calzone</li>
            <li>Pasta</li>
            <li>Big Pasta</li>
            <li>Smaller Pasta</li>
            <li>Wines</li>
            <li>Desserts</li>
            <li>Cannoli</li>
          </ul>
    `
    content.appendChild(newContent);
}
