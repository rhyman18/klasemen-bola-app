import ViewIndex from './views/viewIndex.js';
import ViewInputClub from './views/viewInputClub.js';

class App {
    constructor(container) {
        this._container = container;
    }

    renderHome() {
        this._container.innerHTML = ViewIndex.firstRender();
        ViewIndex.secondRender();
    }

    renderInputClub() {
        this._container.innerHTML = ViewInputClub.firstRender();
        ViewInputClub.secondRender();
        ViewInputClub.eventRender();
    }
}

export default App;
