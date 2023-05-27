const createInputClub = () => `
<label for="clubName" class="text-blue-100">Nama Club :</label>
<input id="club-name" type="text" name="clubName" placeholder="Masukan nama club" class="py-2 px-4 rounded-lg text-gray-700">
<label for="clubTown" class="text-blue-100">Kota Club :</label>
<input id="club-town" type="text" name="clubTown" placeholder="Masukan kota asal club" class="py-2 px-4 rounded-lg text-gray-700">
<button id="club-submit" type="button" class="mt-9 py-2 bg-blue-500 hover:bg-blue-700 border border-blue-900 text-blue-200 rounded-lg">Simpan</button>
<a href="index.html" class="mt-12 text-center text-blue-200 hover:text-blue-300">Kembali ke laman utama</a>
`;

export { createInputClub };