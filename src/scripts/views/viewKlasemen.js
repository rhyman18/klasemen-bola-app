import { createKlasemen } from '../components/contentKlasemen.js';
import DataClub from '../data/dataClub.js';

const ViewKlasemen = {
    firstRender() {
        return `
        <div class="h-screen max-w-screen-lg flex justify-center items-center mx-4 lg:mx-auto">
            <div class="grow bg-blue-800 border-4 border-blue-400 rounded-xl px-6">
                <h1 class="text-3xl font-bold text-blue-300 text-center mt-9">Klasemen</h1>
                <table class="mt-12 table-auto text-blue-200 text-lg text-center w-full">
                    <thead>
                        <tr>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">No</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Klub</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Main</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Menang</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Seri</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Kalah</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Gol</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Kebobolan</th>
                            <th class="bg-blue-500 border border-blue-300 text-blue-100 p-1">Point</th>
                        </tr>
                    </thead>
                    <tbody id="content-klasemen"></tbody>
                </table>
                <a href="index.html" class="block my-6 text-center text-lg text-blue-200 hover:text-blue-300">Kembali ke laman utama</a>
            </div>
        </div>
        `;
    },

    secondRender() {
        const content = document.querySelector('#content-klasemen');
        const getClub = DataClub.show();
        if (getClub) {
            getClub.forEach((clubs, index) => {
                content.innerHTML += createKlasemen(clubs, index);
            });
        } else {
            content.innerHTML = '<tr><td colspan="9" class="py-9 font-semibold text-xl border border-blue-300 bg-blue-700">Belum ada klub terdaftar.</td></tr>';
        }
    },
};

export default ViewKlasemen;
