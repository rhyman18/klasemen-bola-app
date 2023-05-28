const ViewInputScore = {
    initRender() {
        return `
        <div class="h-screen max-w-screen-sm flex justify-center items-center mx-4 sm:mx-auto">
            <div class="grow bg-blue-800 border-4 border-blue-400 rounded-xl">
                <h1 class="text-3xl font-bold text-blue-300 text-center mt-9">Input Score</h1>
                <div class="flex flex-wrap text-center m-9 text-lg font-medium text-blue-200">
                    <a id="score-single" class="basis-1/2 py-2 bg-blue-700">Single</a>
                    <a id="score-multiple" class="basis-1/2 py-2 hover:bg-blue-900 cursor-pointer">Multiple</a>
                    <div id="input-score" class="mt-9 basis-full flex flex-col gap-2"></div>
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

        content.innerHTML = 'Text default';

        navMultiple.addEventListener('click', () => {
            navMultiple.className = 'basis-1/2 py-2 bg-blue-700';
            navSingle.className = 'basis-1/2 py-2 hover:bg-blue-900 cursor-pointer';
            content.innerHTML = 'Text multiple';
        });

        navSingle.addEventListener('click', () => {
            navSingle.className = 'basis-1/2 py-2 bg-blue-700';
            navMultiple.className = 'basis-1/2 py-2 hover:bg-blue-900 cursor-pointer';
            content.innerHTML = 'Text single';
        });
    }
};

export default ViewInputScore;
