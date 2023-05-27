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
    }
};

export default DataClub;