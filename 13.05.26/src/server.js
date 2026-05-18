const express = require('express');
const pool = require('./db.js'); 

app.use(express.json());


app.get('/legumes', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM legumes_seu_nome');
        res.json(resultado.rows);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar legumes' });
    }
});

app.get('/legumes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await pool.query('SELECT * FROM legumes_seu_nome WHERE id = $1', [id]);
        
        if (resultado.rows.length === 0) {
            return res.status(404).json({ message: 'Legume não encontrado' });
        }
        
        res.json(resultado.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar o legume' });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));