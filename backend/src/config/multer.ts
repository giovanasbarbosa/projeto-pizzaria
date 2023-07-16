import multer from "multer"; 
import crypto from "crypto"; /*Já vem com o NodeJS (criar um rest criptografado para imagens com o mesmo nome não seja usado)*/
import {extname, resolve} from "path"; //Também já vem do NodeJS

export default{
    upload(folder:string){
        return{
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..','..',folder),
                filename: (request, file, callback) => { //Isso vem do multer
                    const fileHash = crypto.randomBytes(16).toString("hex")
                    const fileName = `${fileHash}-${file.originalname}` //Hash-nome_da_foto

                    return callback(null,fileName) //erro, fileName
                }
            })
        }
    }
}
