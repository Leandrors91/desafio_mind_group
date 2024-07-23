import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/usuario', async (req, res) => {
  const usuarios = await prisma.usuario.findMany()
  res.json(usuarios)
})

app.get('/usuario/:id', async (req, res) => {
  const { id } = req.params
  const usuarios = await prisma.usuario.findMany({
    where: {
      id: id,
    },
  })
  res.json(usuarios)
})

app.post(`/usuario`, async (req, res) => {
  const { nome,email,senha } = req.body
  const result = await prisma.usuario.create({
    data: {
      nome,
      email,
      senha,
    },
  })
  res.json(result)
})

app.put('/usuario/:id', async (req, res) => {
  const { id } = req.params
  const { nome,foto,email,senha } = req.body
  const usuario = await prisma.usuario.update({
    where: {
      id: id,
    },
    data: {
      nome: nome,
      foto: foto,
      email: email,
      senha: senha,
    },
  })
  res.json(usuario)
})

app.delete(`/usuario/:id`, async (req, res) => {
  const { id } = req.params
  const usuario = await prisma.usuario.delete({
    where: {
      id: id,
    },
  })
  res.json(usuario)
})

app.get('/despesa', async (req, res) => {
  const despesas = await prisma.despesa.findMany()
  res.json(despesas)
})

app.get('/despesa/:id', async (req, res) => {
  const { id } = req.params
  const despesas = await prisma.despesa.findMany({
    where: {
      id: id,
    },
  })
  res.json(despesas)
})

app.post(`/despesa`, async (req, res) => {
  const { descricao,valor,historico } = req.body
  const result = await prisma.despesa.create({
    data: {
      descricao,
      valor,
      historico,
    },
  })
  res.json(result)
})

app.put('/despesa/:id', async (req, res) => {
  const { id } = req.params
  const { descricao,valor,historico } = req.body
  const despesa = await prisma.despesa.update({
    where: {
      id: id,
    },
    data: {
      descricao: descricao,
      valor: valor,
      historico: historico,
    }
  })
  res.json(despesa)
})

app.delete(`/despesa/:id`, async (req, res) => {
  const { id } = req.params
  const despesa = await prisma.despesa.delete({
    where: {
      id: id,
    },
  })
  res.json(despesa)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
