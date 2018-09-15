function pdf(){
    callPDF();
}

function pdfTest(item){
    var columns = [
        {title: "สถาบันทางการเงิน", dataKey: "id"},
        {title: item.FIName , dataKey: "name"}
    ];
    var rows = [
        {"id": "ผลิตภัณฑ์" , "name": item.ProductName}
    ];
    
    // Only pt supported (not mm or in)
    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, rows, {
        styles: {fillColor: [100, 255, 255]},
        columnStyles: {
            id: {fillColor: 255}
        },
        margin: {top: 60},
        addPageContent: function(data) {
            doc.text("Header", 40, 30);
        }
    });
    doc.save('table.pdf');
}