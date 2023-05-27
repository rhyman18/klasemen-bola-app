import DataClub from '../data/dataClub.js';

const InputClub = {
    init({ field1, field2, button }) {
        this._name = field1;
        this._town = field2;
        this._submit = button;

        this._render();
    },

    _render() {
        this._submit.addEventListener('click', () => {
            if (
                this._validate(this._name, 'Nama klub') &&
                this._validate(this._town, 'Kota klub') &&
                this._validateExists(this._name, DataClub.show())
            ) {
                const dataInput = {
                    name: this._name.value.toLowerCase(),
                    town: this._town.value.toLowerCase(),
                    ma: 0,
                    me: 0,
                    s: 0,
                    k: 0,
                    gm: 0,
                    gk: 0,
                };
                DataClub.add(dataInput);
                this._clear(this._name, this._town);
            }
        });
    },

    _validate(field, nameField) {
        const specialCase = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
        const numberCase = /[0-9]/;
        if (field.value.length <= 3) {
            window.alert(nameField + ' tidak boleh kurang dari 3');
            return false;
        }
        if (field.value.length >= 30) {
            window.alert(nameField + ' tidak boleh lebih dari 30');
            return false;
        }
        if (field.value.match(specialCase)) {
            window.alert(nameField + ' tidak boleh mengandung simbol');
            return false;
        }
        if (field.value.match(numberCase)) {
            window.alert(nameField + ' tidak boleh mengandung angka');
            return false;
        }
        return true;
    },

    _validateExists(field, data) {
        const search = data.find(item => item.name === field.value);
        if (search) {
            window.alert('Klub sudah terdaftar.');
            return false;
        }
        return true;
    },

    _clear(field1, field2) {
        field1.value = '';
        field2.value = '';
        window.alert('Sukses menambahkan klub baru');
    }
};

export default InputClub;
