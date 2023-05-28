import DataScore from '../data/dataScore.js';
import DataClub from '../data/dataClub.js';

const InputSingleScore = {
    init({ club1, club2, score1, score2, button }) {
        this._club1 = club1;
        this._club2 = club2;
        this._score1 = score1;
        this._score2 = score2;
        this._submit = button;

        this._render();
    },

    _render() {
        this._submit.addEventListener('click', () => {
            if (
                this._validateClub(this._club1, DataClub.show()) &&
                this._validateClub(this._club2, DataClub.show()) &&
                this._validate()
            ) {
                const dataInput = {
                    club1: this._club1.value.toLowerCase(),
                    club2: this._club2.value.toLowerCase(),
                    score1: Number(this._score1.value),
                    score2: Number(this._score2.value),
                };
                if (this._validateNotExists(dataInput)) {
                    DataScore.add(dataInput);
                    this._analysisScore(dataInput);
                    this._clear();
                }
            }
        });
    },

    _validate() {
        const numberCase = /[0-9]/;
        if (this._club1.value === this._club2.value) {
            window.alert('Klub 1 dan 2 tidak mungkin sama.');
            return false;
        }
        if (!this._score1.value.match(numberCase) || !this._score2.value.match(numberCase)) {
            window.alert('Score berupa angka.');
            return false;
        }
        return true;
    },

    _validateClub(field, data) {
        if (data) {
            const search = data.find(item => item.name === field.value);
            if (!search) {
                window.alert(`Klub ${field.value} belum terdaftar.`)
                return false;
            }
        }
        return true;
    },

    _validateNotExists(data) {
        const getScore = DataScore.show();
        if (getScore) {
            const search = getScore.find(
                item =>
                    item.club1 === data.club1 &&
                    item.club2 === data.club2 &&
                    item.score1 === data.score1 &&
                    item.score2 === data.score2
            );
            if (search) {
                window.alert('Terdapat data pertandingan yang sama persis')
                return false;
            }
        }
        return true;
    },

    _analysisScore(data) {
        const getClub = DataClub.show();
        const indexClub1 = getClub.findIndex(item => item.name === data.club1);
        const indexClub2 = getClub.findIndex(item => item.name === data.club2);
        const updateData1 = getClub[indexClub1];
        const updateData2 = getClub[indexClub2];

        // update data club berdasarkan input score
        updateData1.ma++;
        updateData2.ma++;
        updateData1.gm = updateData1.gm + data.score1;
        updateData1.gk = updateData1.gk + data.score2;
        updateData2.gm = updateData2.gm + data.score2;
        updateData2.gk = updateData2.gk + data.score1;

        if (data.score1 === data.score2) {
            updateData1.s++;
            updateData2.s++;
        } else if (data.score1 > data.score2) {
            updateData1.me++;
            updateData2.k++;
        } else {
            updateData2.me++;
            updateData1.k++;
        }

        DataClub.update({
            club1: indexClub1,
            club2: indexClub2,
            dataClub1: updateData1,
            dataClub2: updateData2,
        });
    },

    _clear() {
        this._club1.value = '';
        this._club2.value = '';
        this._score1.value = '';
        this._score2.value = '';
        window.alert('Sukses menambahkan pertandingan');
    }
};

export default InputSingleScore;
