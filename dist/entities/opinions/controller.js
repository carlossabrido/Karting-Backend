import Opinion from "./model.js";
export const createOpinion = (data) => {
    if (data.token.role == 'client' || data.token.role == 'admin') {
        data.body.created_at = new Date();
        data.body.email = data.token.email;
        return Opinion.create(data.body);
    }
    else {
        throw new Error('NOT_ALLOW');
    }
};
// export const createOpinion=(data)=>{
//             data.body.created_at = new Date();
//             return  Opinion.create(data.body)
// }
export const listOpinions = async () => {
    const populateOptions = [
        { path: "email", select: ["email"] },
    ];
    return Opinion.find({ deleted_at: null })
        .populate(populateOptions);
};
//# sourceMappingURL=controller.js.map