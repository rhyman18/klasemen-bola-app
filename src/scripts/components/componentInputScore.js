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
`;

export { createInputScoreSingle, createInputScoreMultiple };