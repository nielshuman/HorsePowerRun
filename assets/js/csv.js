function buildTable(response) {
    const allRows = response.split(/\r?\n|\r/).filter(Boolean);
    let table = '<table>';
    
    allRows.forEach((row, index) => {
        const rowCells = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(cell => cell.replace(/^"|"$/g, ''));
        
        if (index === 0) {
            table += '<thead><tr>';
            rowCells.forEach(cell => {
                table += `<th>${escapeHtml(cell)}</th>`;
            });
            table += '</tr></thead><tbody>';
        } else {
            table += '<tr>';
            rowCells.forEach(cell => {
                table += `<td>${escapeHtml(cell)}</td>`;
            });
            table += '</tr>';
        }
    });
    
    table += '</tbody></table>';
    return table;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}