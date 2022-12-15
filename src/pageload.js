export function pageload () {
    const content = document.querySelector('#content');
    const newContent = document.createElement('div');
    newContent.innerHTML = `
    <header>
        <h1>Big Papa's Big Pizza</h1>
        <nav>
          <ul>
            <li><button id="menu">Our Menu</button></li>
            <li><button id="story">Our Story</button></li>
            <li><button id="contact">Our Contact Info</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="section">
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
        </section>
      </main>
      <footer>
        <p>Please come eat my pizza!</p>
      </footer>
    `
    content.appendChild(newContent);
}

