const createInputScoreSingle = () => `
<div class="flex flex-col sm:flex-row">
    <div class="flex flex-col gap-6">
        <input id="club-name-1" type="text" name="clubName1" placeholder="Nama club 1" class="py-2 px-4 rounded-lg text-gray-700" autofocus>
        <input id="club-score-1" type="text" name="clubScore1" placeholder="Hasil score" class="py-2 px-4 rounded-lg text-gray-700">
    </div>
    <div class="m-6 font-semibold text-xl text-blue-300 flex justify-center items-center">VS</div>
    <div class="flex flex-col gap-6">
        <input id="club-name-2" type="text" name="clubName2" placeholder="Nama club 2" class="py-2 px-4 rounded-lg text-gray-700">
        <input id="club-score-2" type="text" name="clubScore2" placeholder="Hasil score" class="py-2 px-4 rounded-lg text-gray-700">
    </div>
</div>
<button id="single-submit" type="button" class="mt-9 py-2 px-9 bg-blue-500 hover:bg-blue-700 text-blue-200 rounded-lg">Simpan</button>
`;

const createInputScoreMultiple = () => `
<form id="submit-multiple" method="post">
    <div id="multiple-field" class="flex flex-col gap-3">
        <div class="flex gap-5">
            <input type="text" name="clubName_1_1" placeholder="Nama club 1" class="p-2 rounded-lg text-gray-700 w-32 text-center" autofocus>
            <div class="flex items-center">-</div>
            <input type="text" name="clubName_1_2" placeholder="Nama club 2" class="p-2 rounded-lg text-gray-700 w-32 text-center">
            <div></div>
            <input type="text" name="clubScore_1_1" placeholder="Hasil score" class="p-2 rounded-lg text-gray-700 w-32 text-center">
            <div class="flex items-center">-</div>
            <input type="text" name="clubScore_1_2" placeholder="Hasil score" class="p-2 rounded-lg text-gray-700 w-32 text-center">
        </div>
    </div>
    <button id="add-multiple" type="button" class="mt-9 me-3 py-2 px-9 bg-blue-500 hover:bg-blue-700 text-blue-200 rounded-lg">Tambah</button>
    <button type="submit" class="mt-9 ms-3 py-2 px-9 bg-blue-500 hover:bg-blue-700 text-blue-200 rounded-lg">Simpan</button>
</form>
`;

const generateMultipleField = (parent, i) => {
    const createDivParent = document.createElement('div');
    createDivParent.className = 'flex gap-5';

    const createInputClub1 = document.createElement('input');
    createInputClub1.type = 'text';
    createInputClub1.name = `clubName_${i}_1`;
    createInputClub1.placeholder = 'Nama club 1';
    createInputClub1.className = 'p-2 rounded-lg text-gray-700 w-32 text-center';
    createDivParent.appendChild(createInputClub1);

    const createSpaceClub = document.createElement('div');
    createSpaceClub.className = 'flex items-center';
    createSpaceClub.innerText = '-';
    createDivParent.appendChild(createSpaceClub);

    const createInputClub2 = document.createElement('input');
    createInputClub2.type = 'text';
    createInputClub2.name = `clubName_${i}_2`;
    createInputClub2.placeholder = 'Nama club 2';
    createInputClub2.className = 'p-2 rounded-lg text-gray-700 w-32 text-center';
    createDivParent.appendChild(createInputClub2);

    const createSpace = document.createElement('div');
    createDivParent.appendChild(createSpace);

    const createInputScore1 = document.createElement('input');
    createInputScore1.type = 'text';
    createInputScore1.name = `clubScore_${i}_1`;
    createInputScore1.placeholder = 'Hasil score';
    createInputScore1.className = 'p-2 rounded-lg text-gray-700 w-32 text-center';
    createDivParent.appendChild(createInputScore1);

    const createSpaceScore = document.createElement('div');
    createSpaceScore.className = 'flex items-center';
    createSpaceScore.innerText = '-';
    createDivParent.appendChild(createSpaceScore);

    const createInputScore2 = document.createElement('input');
    createInputScore2.type = 'text';
    createInputScore2.name = `clubScore_${i}_2`;
    createInputScore2.placeholder = 'Hasil score';
    createInputScore2.className = 'p-2 rounded-lg text-gray-700 w-32 text-center';
    createDivParent.appendChild(createInputScore2);

    parent.appendChild(createDivParent);
};

export { createInputScoreSingle, createInputScoreMultiple, generateMultipleField };
