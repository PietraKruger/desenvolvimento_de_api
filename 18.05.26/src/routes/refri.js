import express from "express";
import { refrigerantesService} from "../services/refrigerantes.service.js";

export const refriRoute = express.Router();

// 1- pegar todos os refris
refriRoute.get("/", async (req, res) => {
  try {
    const refri = await refrigerantesService.getAll();
    res.status(200).json(refri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2-pegar refri pelo id
refriRoute.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const refri = await refrigerantesService.getById(id);

    if (!refri || refri.length === 0) {
      return res.status(404).json({ message: "Refri não encontrado" });
    }
    res.status(200).json(refri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3-Criar novo refri
refriRoute.post("/", async (req, res) => {
  try {
    const nome  = req.body;
    console.log("cheguei aqui2")
    if (!nome) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    const newrefri = await refrigerantesService.createrefri(nome);
    res.status(201).json(newrefri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// 4-Atualizar nome do refri
refriRoute.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const updated = await refrigerantesService.updaterefri(id, data);

    if (!updated) {
      return res.status(404).json({ message: "Refri não encontrado" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5-Atualizar todo o refri
refriRoute.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    const updated = await refrigerantesService.updaterefri(id, data);

    if (!updated) {
      return res.status(404).json({ message: "Refri não encontrado" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6- Deletar Refri
refriRoute.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await refrigerantesService.deleterefri(id);

    if (!deleted) {
      return res.status(404).json({ message: "Refri não encontrado" });
    }
    res.status(200).json({ message: "Refri deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});