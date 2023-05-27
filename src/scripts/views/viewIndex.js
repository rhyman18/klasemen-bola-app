import {createMenu} from '../components/contentIndex.js';

const ViewIndex = {
    firstRender() {
        return `
        <div class="h-screen max-w-screen-sm flex justify-center items-center mx-4 sm:mx-auto">
            <div class="grow bg-blue-800 border-4 border-blue-400 rounded-xl">
                <h1 class="text-3xl font-bold text-blue-300 text-center mt-9">My League App</h1>
                <div id="main-menu" class="m-12 flex flex-col text-center gap-8"></div>
            </div>
        </div>
        `;
    },

    secondRender() {
        const content = document.querySelector('#main-menu');
        content.innerHTML = createMenu();
    },
};

export default ViewIndex;
