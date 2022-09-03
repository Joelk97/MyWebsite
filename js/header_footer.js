class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="main-header">
            <nav class="nav main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Websites</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}
customElements.define('my-header', myHeader)