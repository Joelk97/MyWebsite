class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="main-header">
            <nav class="nav main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Websites</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}
customElements.define('my-header', myHeader)

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="main-footer">
            <div class="social-icons">
                <ul>
                    <li><a href="https://github.com/Joelk97"><img src="img/icon-github.png"></a></li>
                    <li><a href="https://www.linkedin.com/in/joel-k%C3%BChl-276297192/"><img src="img/icon-linkedin.png"></a></li>
                    <li><a href="https://www.strava.com/athletes/4548209"><img src="img/icon-strava.png"></a></li>
                    <li><a href="mailto:kuehljoel@gmail.com"><img src="img/icon-email.png"></a></li>
                </ul>
            </div>
            <div class="copyright">
                <p>&copy; 2022 Joel Kuehl</p>
            </div>
        </footer>
        `
    }
}
customElements.define('my-footer', myFooter)