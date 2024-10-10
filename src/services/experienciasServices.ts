import { experienciasofDB } from "../modelos/types_d_experiencias";

export const getEntries = {
    getAll: async()=>{
    return await experienciasofDB.find();
    },
    findById: async(id:string)=>{
        return await experienciasofDB.findById(id);
    },
    findUserById: async(id:string)=>{
        return await experienciasofDB.findById(id).populate('owner').populate('participants');
    },
    addParticipant: async(idExp:string,idPart:string)=>{
        return await experienciasofDB.findByIdAndUpdate(idExp,{$addToSet:{participants:idPart}});
    },

    //Canviat el findUserById per a que faci un delete de l'usuari de la llista de participants
    delParticipant: async(idExp:string,idPart:string)=>{
        return await experienciasofDB.findByIdAndDelete(idExp,{$pull:{participants:idPart}});
    },
    
    create: async(entry:object)=>{
        return await experienciasofDB.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await experienciasofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await experienciasofDB.findByIdAndDelete(id);
    },
}