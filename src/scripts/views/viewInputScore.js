import InputSingleScore from '../utils/inputSingleScore.js';
import InputMultipleScore from '../utils/inputMultipleScore.js';
import {
    createInputScoreSingle,
    createInputScoreMultiple,
    generateMultipleField,
} from '../components/componentInputScore.js';

const ViewInputScore = {
    initRender() {
        return `
        <div class="h-screen max-w-screen-sm flex justify-center items-center mx-4 sm:mx-auto">
            <div class="grow bg-blue-800 border-4 border-blue-400 rounded-xl">
                <h1 class="text-3xl font-bold text-blue-300 text-center mt-9">Input Score</h1>
                <div class="flex flex-wrap text-center m-9 text-lg font-medium text-blue-200">
                    <a id="score-single" class="basis-1/2 py-2 bg-blue-700">Single</a>
                    <a id="score-multiple" class="basis-1/2 py-2 hover:bg-blue-900 cursor-pointer">Multiple</a>
                    <div id="input-score" class="py-9 px-6 basis-full border-2 bg-blue-600 border-blue-700"></div>
                </div>
                <a href="index.html" class="block my-6 text-center text-lg text-blue-200 hover:text-blue-300">Kembali ke laman utama</a>
            </div>
        </div>
        `;
    },

    firstRender() {
        const content = document.querySelector('#input-score');
        const navSingle = document.querySelector('#score-single');
        const navMultiple = document.querySelector('#score-multiple');

        this._renderInputSingle(content);

        navMultiple.addEventListener('click', () => {
            navMultiple.className = 'basis-1/2 py-2 bg-blue-700';
            navSingle.className = 'basis-1/2 py-2 hover:bg-blue-900 cursor-pointer';
            this._renderInputMultiple(content);
        });

        navSingle.addEventListener('click', () => {
            navSingle.className = 'basis-1/2 py-2 bg-blue-700';
            navMultiple.className = 'basis-1/2 py-2 hover:bg-blue-900 cursor-pointer';
            this._renderInputSingle(content);
        });
    },

    _renderInputSingle(element) {
        element.innerHTML = createInputScoreSingle();
        this._eventInputSingle();
    },

    _renderInputMultiple(element) {
        element.innerHTML = createInputScoreMultiple();
        this._eventFieldGenerator();
        this._eventInputMultiple();
    },

    _eventInputSingle() {
        InputSingleScore.init({
            club1: document.querySelector('#club-name-1'),
            club2: document.querySelector('#club-name-2'),
            score1: document.querySelector('#club-score-1'),
            score2: document.querySelector('#club-score-2'),
            button: document.querySelector('#single-submit'),
        });
    },

    _eventFieldGenerator() {
        let count = 1;
        document.querySelector('#add-multiple').addEventListener('click', () => {
            count++;
            generateMultipleField(document.querySelector('#multiple-field'), count);
        });
    },

    _eventInputMultiple() {
        InputMultipleScore.init(document.querySelector('#submit-multiple'));
    }
};

export default ViewInputScore;
