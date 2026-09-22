import express from "express";
import chefRoutes from "../routes/chefRoutes.js"
import dotenv from "dotenv";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(chefRoutes);

app.listen(PORT, () => {
    console.log(`Servidor de receitas rodando na porta: ${PORT}...`)
});
