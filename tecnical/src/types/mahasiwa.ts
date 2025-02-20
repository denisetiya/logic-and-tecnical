import {z} from 'zod';

export const alamatSchema = z.object({
    provinsi: z.string().min(3),
    kota: z.string().min(3),
    jalan: z.string().min(4),
});

export const mahasiswaSchema = z.object({
    nama: z.string().min(3),
    npm: z.number(),
    alamat: alamatSchema,
    hobi: z.array(z.string().min(3)),
});

export const updateMahasiswaSchema = mahasiswaSchema.extend({
    id : z.string().max(24)
})


export type iAlamat = z.infer<typeof alamatSchema>;
export type iMahasiswa = z.infer<typeof mahasiswaSchema>;
export type iUpdateMahasiswa = z.infer<typeof updateMahasiswaSchema>