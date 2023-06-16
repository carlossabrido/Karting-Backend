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
export const listOpinions = async () => {
    return Opinion.find({ deleted_at: null }).sort({ created_at: -1 });
};
export const deleteOpinions = async (data) => {
    const opinion = await Opinion.findOne({ _id: data.params.id, deleted_at: null });
    if (!opinion) {
        throw new Error('NOT_FOUND');
    }
    if (data.token.role == 'client' || data.token.role == 'admin') {
        data.body.deleted_at = new Date();
        data.body.client = data.token.id;
        const deleteOpinion = await Opinion.findByIdAndUpdate({ _id: data.params.id, client: data.token.id }, { $set: data.body }, { new: true });
        return deleteOpinion;
    }
    else {
        throw new Error('NOT_ALLOW');
    }
};
//# sourceMappingURL=controller.js.map