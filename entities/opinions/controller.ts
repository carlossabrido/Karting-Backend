import Opinion from "./model.js";
import User from "../user/model.js";


export const createOpinion=(data)=>{
        if(data.token.role =='client' || data.token.role =='admin'){
            data.body.created_at = new Date();
            return  Opinion.create(data.body)
        }
        else{throw new Error ('NOT_ALLOW')}
        
}
// export const createOpinion=(data)=>{
        
//             data.body.created_at = new Date();
//             return  Opinion.create(data.body)

        
// }

export const listOpinions= async()=>{
    const projection = { circuit: 1, start_date: 1};
  
    const populateOptions = [
     { path: "title", select: ["email","title"] },
     { path: "opinion", select: ["email","title"] },
      
     
    ]
    return Opinion.find({deleted_at:null},projection)
    .populate(populateOptions)
    
}