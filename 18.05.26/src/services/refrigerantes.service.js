import { pool } from "../config/db.js"

class RefrigerantesService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM public.refrigerantes")

            return res.rows
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id) {
        try {
            const res = await pool.query('SELECT * FROM refrigerantes WHERE id = $1', [id])
            console.log(res);

            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async postRefri(data) {
        try {
            const res = await pool.query('INSERT INTO refrigerantes (nome, quantidade, marca)')
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async updateRefri(id, data) {
        try {
            const res = await pool.query('UPDATE public.refrigerantes SET nome=($1), quantidade=($2), marca=($3) WHERE id=($4)', [data.nome, data.quantidade, data.marca, id]);
            return res.rows;
        } catch (error) {
            console.error(error);

        }
    }

    async deleteRefri(id) {
        try {
            const res = await pool.query ('DELETE FROM public.refrigerante WHERE id= $1', [id]);
            return res
        } catch (error) {
            console.error(error);
        }

    }
}

export const refrigerantesService = new RefrigerantesService()