import ViewIndex from './views/viewIndex.js';
import ViewInputClub from './views/viewInputClub.js';
import ViewKlasemen from './views/viewKlasemen.js';
import ViewInputScore from './views/viewInputScore.js'

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

    renderKlasemen() {
        this._container.innerHTML = ViewKlasemen.firstRender();
        ViewKlasemen.secondRender();
    }

    renderInputScore() {
        this._container.innerHTML = ViewInputScore.initRender();
        ViewInputScore.firstRender();
    }
}

export default App;
