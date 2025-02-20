import type { Router } from "express";
import express from "express";
import mahasiswa from "./module/mahasiswa/mahasiswa.controller";


const router: Router = express.Router();

router.use('/mahasiswa', mahasiswa)

export default router;
