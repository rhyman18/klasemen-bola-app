const DataScore = {
    show() {
        if (this._load()) {
            return JSON.parse(this._load());
        }
    },

    add(data) {
        if (this._load()) {
            const tempScore = JSON.parse(this._load());
            tempScore.push(data);
            localStorage.setItem('score', JSON.stringify(tempScore));
        } else {
            const dataScore = [];
            dataScore.push(data);
            localStorage.setItem('score', JSON.stringify(dataScore));
        }
    },

    _load() {
        return localStorage.getItem('score')
    }
};

export default DataScore;
