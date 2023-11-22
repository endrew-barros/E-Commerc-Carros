import express, { Request, Response } from 'express';
import usuarioController from './controller/usuarioController'
import produtoController from './controller/produtoController';
import categoriaController from './controller/categoriaController';
import postagemController from './controller/postagemController'
const app = express();
app.use(express.json())
const PORT = 3000;

// Usuários
app.post('/usuarios', (req: Request, res: Response) => {
    usuarioController.criar(req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json({message: error.message}));
});
app.get('/usuarios', (req, res) => {
    usuarioController.listarTodos()
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.get('/usuarios/:id', (req, res) => {
    usuarioController.listarUm(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.put('/usuarios/:id', (req, res) => {
    usuarioController.editar(req.params.id, req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.delete('/usuarios/:id', (req, res) => {
    usuarioController.deletar(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});

// Produto
app.post('/produto', (req: Request, res: Response) => {
    produtoController.criar(req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.get('/produto', (req, res) => {
    produtoController.listarTodos()
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.get('/produto/:id', (req, res) => {
    produtoController.listarUm(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.put('/produto/:id', (req, res) => {
    produtoController.editar(req.params.id, req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.delete('/produto/:id', (req, res) => {
    produtoController.deletar(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});

//Categoria
app.post('/categoria', (req: Request, res: Response) => {
    categoriaController.criar(req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.get('/categoria', (req, res) => {
    categoriaController.listarTodos()
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.get('/categoria/:id', (req, res) => {
    categoriaController.listarUm(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.put('/categoria/:id', (req, res) => {
    categoriaController.editar(req.params.id, req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.delete('/produto/:id', (req, res) => {
    categoriaController.deletar(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});

// Post
app.post('/postagem', (req: Request, res: Response) => {
    postagemController.criar(req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.get('/postagem', (req, res) => {
    postagemController.listarTodos()
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.get('/postagem/:id', (req, res) => {
    postagemController.listarUm(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.put('/postagem/:id', (req, res) => {
    postagemController.editar(req.params.id, req.body)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});
app.delete('/postagem/:id', (req, res) => {
    postagemController.deletar(req.params.id)
        .then((result: any) => res.json(result))
        .catch((error: any) => res.status(400).json(error));
});


app.listen(PORT, () => { console.log(`servidor rodando na porta = ${PORT}`,) })