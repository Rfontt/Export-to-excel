import express from 'express';
import { ExportToExcelDatas } from '../controllers/exportToExcelDatas.js';

const route = express.Router();

route.post("/exportToExcel/:userName", ExportToExcelDatas);

export default route;
