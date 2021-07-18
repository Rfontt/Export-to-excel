import xlsx from 'excel4node';

function GenerateExcel(Datas, filePath) {
    const workbook = new xlsx.Workbook();
    const workSheet = workbook.addWorksheet("Datas github repository");

    const tableName = [
        'Name',
        'Description',
        'Language',
        'URL',
        'Branch'
    ];
    let headingColumnIndex = 1;
    let rowIndex = 2;

    workSheet.column(1).setWidth(24);
    workSheet.column(2).setWidth(55);
    workSheet.column(3).setWidth(18);
    workSheet.column(4).setWidth(40);
    workSheet.column(5).setWidth(18);

    const stylesColumnName = {
        alignment: {
          horizontal: 'center',
          vertical: 'center'
        },
    
        font: {
          size: 15,
          name: 'Calibri',
          color: 'FFFFFF',
          bold: true
        },
    
        fill: {
          type: 'pattern',
          patternType: 'solid',
          fgColor: '483D8B'
        },
    };

    const stylesValues = {
        alignment: {
          horizontal: 'center',
          vertical: 'center'
        },
    
        border: {
          top: {
            style: 'medium',
            color: '000000'
          },
    
          bottom: {
            style: 'medium',
            color: '000000'
          },
    
          right: {
            style: 'medium',
            color: '000000'
          },
    
          left: {
            style: 'medium',
            color: '000000'
          },
        },
    };

    tableName.forEach((name) => {
        workSheet.cell(1, headingColumnIndex++).string(name).style(stylesColumnName);
    });

    Datas.forEach((data) => {
        workSheet.cell(rowIndex, 1).string(data.full_name).style(stylesValues);
        workSheet.cell(rowIndex, 2).string(data.description).style(stylesValues);
        workSheet.cell(rowIndex, 3).string(data.language).style(stylesValues);
        workSheet.cell(rowIndex, 4).string(data.url).style(stylesValues);
        workSheet.cell(rowIndex, 5).string(data.default_branch).style(stylesValues);

        workSheet.row(rowIndex).setHeight(22);
        rowIndex++;
    });

    workbook.write(filePath);
}

export { GenerateExcel };