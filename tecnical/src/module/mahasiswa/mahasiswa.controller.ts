import type { Request, Response, Router } from "express";
import express from "express"
import response from "../../utils/api.response";
import MahasiswaService  from "./mahasiswa.service";
import { iMahasiswa, mahasiswaSchema } from "../../types/mahasiwa";
import handleValidationError from "../../utils/api.data.validation";

const mahasiswa : Router = express.Router()


mahasiswa.get('', async(req : Request, res : Response)=> {
    try {
        const mahasiswa = await MahasiswaService.getAllMahasiswa()

        return response(res, 200, null, mahasiswa )

    } catch (error : any) {
        return response(res, error.status ? error.status : 500, error.message)
    }
})

mahasiswa.get('/:npm', async(req : Request, res : Response) => {
    
    const npm:number | undefined = req.params.npm ? parseInt(req.params.npm) : undefined

    if (!npm) return response(res, 400, "you need npm to access data")
    

    try {
        const mahasiswa = await MahasiswaService.getMahasiswaByNpm(npm)
        return response(res, 200, null, mahasiswa)

    } catch (error : any) {
        return response(res, error.status ? error.status : 500, error.message)
    } 
})

mahasiswa.post('/add', async(req : Request, res : Response) => {

    const data : iMahasiswa = req.body

    const validData = mahasiswaSchema.safeParse(data)
    if (!validData.success) return handleValidationError(validData, res)

    

    try {
        
        const newMahasiswa = await MahasiswaService.createMahasiswa(data)

        return response (res, 200, null, newMahasiswa)

    } catch (error : any) {
        return response(res, error.status ? error.status : 500, error.message)
    }
})


mahasiswa.put('/:npm', async(req : Request, res : Response) => {

    const data: iMahasiswa = {
        ...req.body,
        npm: req.params.npm ? parseInt(req.params.npm):undefined
    } 

    const validData = mahasiswaSchema.safeParse(data)

    if (!validData.success){
        return handleValidationError(validData, res)
    }

    try {
        
        const updateData = await MahasiswaService.updateMahasiswa(data)

        return response (res, 200, null, updateData)

    } catch (error : any) {
        return response(res, error.status ? error.status : 500, error.message)
    }


})


mahasiswa.delete('/:npm', async(req : Request, res : Response) => {

    const npm : number | undefined = req.params.npm? parseInt(req.params.npm) : undefined

    if (!npm) return response(res, 400, "you need npm to access data")

    try {
        const deleteMahasiswa = await MahasiswaService.deleteMahasiswa(npm)

        return response(res, 200, null, deleteMahasiswa)
    } catch (error:any) {
        
        return response(res, error.status ? error.status : 500, error.message)
    }
})



export default mahasiswa 


