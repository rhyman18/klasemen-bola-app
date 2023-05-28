const DataClub = {
    show() {
        if (this._load()) {
            return JSON.parse(this._load());
        }
    },

    add(data) {
        if (this._load()) {
            const tempClub = JSON.parse(this._load());
            tempClub.push(data);
            localStorage.setItem('club', JSON.stringify(tempClub));
        } else {
            const dataClub = [];
            dataClub.push(data);
            localStorage.setItem('club', JSON.stringify(dataClub));
        }
    },

    _load() {
        return localStorage.getItem('club')
    },

    update({club1, club2, dataClub1, dataClub2}) {
        const dataClub = JSON.parse(this._load());
        dataClub[club1] = dataClub1;
        dataClub[club2] = dataClub2;
        localStorage.setItem('club', JSON.stringify(dataClub));
    }
};

export default DataClub;