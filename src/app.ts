import 'reflect-metadata';
import './database';
import express from "express";
import {router} from './routes';
import {createConnection} from 'typeorm';
import cors from 'cors';

createConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


export {app};