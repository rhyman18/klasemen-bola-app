const createKlasemen = (club, i) => `
<tr>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${i + 1}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.name.toUpperCase()}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.me + club.s + club.k}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.me}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.s}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.k}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.gm}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.gk}</td>
    <td class="border ${(i % 2 === 0) ? 'bg-blue-700' : 'bg-blue-800'} border-blue-300 p-1">${club.me * 3 + club.s}</td>
</tr>
`;

export { createKlasemen };