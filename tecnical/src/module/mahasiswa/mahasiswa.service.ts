import prisma from "../../config/prisma.config";
import handleApiError from "../../utils/api.error";
import { iMahasiswa } from "../../types/mahasiwa";


export default class MahasiswaService {
    static async getAllMahasiswa() {
        try {
            const mahasiswa = await prisma.mahasiswa.findMany({
                include: {
                    alamat : {
                        select: {
                            provinsi: true,
                            kota: true,
                            jalan: true,
                        }
                    },
                }
            });
            return mahasiswa;            
        } catch (error:unknown) {
            return handleApiError(error);
        }

    }

    static async getMahasiswaByNpm(npm:number) {
        try {
            const mahasiswa = await prisma.mahasiswa.findUnique({
                where: {
                    npm: npm
                }
            });
            return mahasiswa;
        } catch (error:unknown) {
            return handleApiError(error);
        }
    }

    static async createMahasiswa(mahasiswaData: iMahasiswa) {
        try {

            const newMahasiswa = await prisma.mahasiswa.create({
                data: {
                    ...mahasiswaData,
                    alamat: {
                        create: mahasiswaData.alamat
                    }
                }
            })

            return newMahasiswa
        } catch (error) {
            return handleApiError(error)
        }
    }


    static async updateMahasiswa(mahasiswaData: iMahasiswa) {
        try {
            const newData = prisma.mahasiswa.update({
                where: {
                    npm: mahasiswaData.npm
                },
                data: {
                    ...mahasiswaData,
                    alamat: mahasiswaData.alamat
                        ? { update: mahasiswaData.alamat }
                        : undefined
                }
            });

            return newData

        } catch (error : unknown) {
            return handleApiError(error)
        }
    }


    static async deleteMahasiswa(npm: number) {
        try {

          const mahasiswa = await prisma.mahasiswa.findUnique({
            where: { npm },
            include: { alamat: true }, 
          });
      
          if (!mahasiswa) {
            throw { status: 404, message: "Mahasiswa tidak ditemukan" };
          }
      
       
          if (mahasiswa.alamat) {
            await prisma.alamat.delete({
              where: { id: mahasiswa.alamat.id },
            });
          }
      
          const deleteMahasiswa = await prisma.mahasiswa.delete({ where: { npm } });
      
          return deleteMahasiswa;
        } catch (error) {
          throw handleApiError(error);
        }
      }
      


}
