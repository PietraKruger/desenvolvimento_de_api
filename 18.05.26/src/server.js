import express from 'express'
import { refriRoute } from "./routes/refri.js"

const app = express();

const PORT = 3000

app.get('/', (req, res) => {
    res.json("API Funcionando")
})

app.use("/refri", refriRoute); // middleware para ler o json trafegado

// app.use("/refrigeramtes", refriRoutes)

app.listen(PORT, () => {
    console.log(`A Aplicação está rodando em: http://localhost:${PORT}`);
})