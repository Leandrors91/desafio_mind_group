import { Express } from "express";
import {Request, Response} from 'express';
import { PrismaClient } from "@prisma/client/extension";

const express = require('express');
const prisma = new PrismaClient();
const port = 3000;
const app = express();

app.use(express.json());

app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/users', async (req: Request, res: Response) => {
  const { email,senha } = req.body;
  const user = await prisma.user.create({
    data: { email,senha },
  });
  res.json(user);
});

app.put('/',(req: Request, res: Response) => {
    res.send('put');
});

app.delete('/',(req: Request, res: Response) => {
    res.send('delete');
});

app.listen(port,() =>{
    console.log(`server is runing on http://localhost:${port}`);
});
