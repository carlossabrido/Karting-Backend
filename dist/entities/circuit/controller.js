import Circuit from './model.js';
export const createCircuit = async (data) => {
    if (data.token.role !== 'admin') {
        throw new Error('NOT_ALLOW');
    }
    else {
        data.body.created_at = new Date();
        return Circuit.create(data.body);
    }
};
export const listCircuit = () => {
    return Circuit.find({ deleted_at: null });
};
export const deleteCircuit = async (req) => {
    if (req.token == "admin") {
        const treatment = Circuit.findOne({ _id: req.params.id });
        req.body.deleted_at = new Date();
        if (!treatment)
            throw new Error('NOT_FOUND');
        await Circuit.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { returnDocument: "after" });
    }
    else
        throw new Error('PERMISSION_RESTRICTED');
};
//# sourceMappingURL=controller.js.map