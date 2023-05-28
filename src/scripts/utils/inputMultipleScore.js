import DataScore from '../data/dataScore.js';
import DataClub from '../data/dataClub.js';

const InputMultipleScore = {
    init(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._getData(e.target);
        });
    },

    _getData(form) {
        const formData = new FormData(form);

        const sortData = [];
        for (const [key, value] of formData) {
            const field = key.split('_');
            sortData.push({
                field_id: Number(field[1]),
                field_cat: field[0],
                field_num: Number(field[2]),
                value: value,
            })
        }

        const getArrId = sortData.map(item => { return item.field_id });
        const total = Math.max(...getArrId);

        const createData = [];
        for (let i = 1; i <= total; i++) {
            const getClub1 = sortData.find(item => item.field_id === i && item.field_cat === 'clubName' && item.field_num === 1);
            const getClub2 = sortData.find(item => item.field_id === i && item.field_cat === 'clubName' && item.field_num === 2);
            const getScore1 = sortData.find(item => item.field_id === i && item.field_cat === 'clubScore' && item.field_num === 1);
            const getScore2 = sortData.find(item => item.field_id === i && item.field_cat === 'clubScore' && item.field_num === 2);

            if (
                this._validateClub(getClub1.value, DataClub.show()) &&
                this._validateClub(getClub2.value, DataClub.show()) &&
                this._validate(getClub1.value, getClub2.value, getScore1.value, getScore2.value)
            ) {
                const inputData = {
                    club1: getClub1.value.toLowerCase(),
                    club2: getClub2.value.toLowerCase(),
                    score1: Number(getScore1.value),
                    score2: Number(getScore2.value)
                };
                if (this._validateNotExists(inputData, createData)) {
                    createData[i - 1] = inputData;
                } else {
                    return;
                }
            } else {
                return;
            }
        }
        createData.forEach((data) => {
            DataScore.add(data);
            this._analysisScore(data);
        })
        window.alert('Sukses menambahkan pertandingan sekaligus');
        window.location.reload();
    },

    _validate(club1, club2, score1, score2) {
        const numberCase = /[0-9]/;
        if (club1.toLowerCase() === club2.toLowerCase()) {
            window.alert('Klub 1 dan 2 tidak mungkin sama.');
            return false;
        }
        if (!score1.match(numberCase) || !score2.match(numberCase)) {
            window.alert('Score berupa angka.');
            return false;
        }
        return true;
    },

    _validateClub(value, data) {
        if (data) {
            const search = data.find(item => item.name === value.toLowerCase());
            if (!search) {
                window.alert(`Klub ${value} belum terdaftar.`)
                return false;
            }
        }
        return true;
    },

    _validateNotExists(dataNew, dataCheck) {
        const getScore = DataScore.show();
        if (getScore) {
            const search = getScore.find(
                item =>
                    item.club1 === dataNew.club1 &&
                    item.club2 === dataNew.club2 &&
                    item.score1 === dataNew.score1 &&
                    item.score2 === dataNew.score2
            );
            if (search) {
                window.alert('Terdapat data pertandingan yang sama persis')
                return false;
            }
        }
        if (dataCheck.length > 0) {
            const search = dataCheck.find(
                item =>
                    item.club1 === dataNew.club1 &&
                    item.club2 === dataNew.club2 &&
                    item.score1 === dataNew.score1 &&
                    item.score2 === dataNew.score2
            );
            if (search) {
                window.alert('Terdapat data pertandingan yang sama persis, cek kembali form')
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
};

export default InputMultipleScore;
