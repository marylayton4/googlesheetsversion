/*!
 *
 * Google Sheets To HTML v0.9a
 *
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 *
 * The Google document's sharing must be set to public
 *
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=198yAIX91beCgjZsZz3PXO_9mXKNq9tEpAqfEEw_14kw&output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E label A "Program", B "Item", C "Quantity", D "Descritpion", E "History"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
