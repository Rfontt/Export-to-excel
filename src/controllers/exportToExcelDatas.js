import axios from 'axios';
import path from 'path';
import moment from 'moment';
import { GenerateExcel } from '../utils/gererateExcel.js';

async function ExportToExcelDatas(req, res) {
    const { userName } = req.params;
    const date = moment().format('YYYY-MM-DD-HH-mm-ss');
    const pathArchives = path.resolve('src', 'archives');
    const namePath = `${userName}-${date}.xlsx`;
    const filePath = `${pathArchives}/${namePath}`;
    const url = `http://localhost:8080/${namePath}`;

    try {
        const response = await axios({
            method: 'GET',
            url: `https://api.github.com/users/${userName}/repos`
        });

        if (response.data.length === 0) {
            return res.status(404).send({ error: "User not found" })
        } else{
            await GenerateExcel(response.data, filePath);

            return res.json({ url: url });
        }
    } catch(error) {
        return res.status(500).send({ error: error })
    }
}

export { ExportToExcelDatas };
