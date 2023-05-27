import App from './scripts/App.js';

const container = document.querySelector('#App');

const app = new App(container);

window.addEventListener('DOMContentLoaded', () => {
    app.renderInputClub();
});