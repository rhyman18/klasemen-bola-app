import { createInputClub } from '../components/contentInputClub.js';
import InputClub from '../utils/inputClub.js';

const ViewInputClub = {
    firstRender() {
        return `
        <div class="h-screen max-w-screen-sm flex justify-center items-center mx-4 sm:mx-auto">
            <div class="grow bg-blue-800 border-4 border-blue-400 rounded-xl">
                <h1 class="text-3xl font-bold text-blue-300 text-center mt-9">Input Data Club</h1>
                <div id="input-club" class="m-12 text-lg font-medium flex flex-col gap-2"></div>
            </div>
        </div>
        `;
    },

    secondRender() {
        const content = document.querySelector('#input-club');
        content.innerHTML = createInputClub();
    },

    eventRender() {
        InputClub.init({
            field1: document.querySelector('#club-name'),
            field2: document.querySelector('#club-town'),
            button: document.querySelector('#club-submit'),
        });
    }
};

export default ViewInputClub;
