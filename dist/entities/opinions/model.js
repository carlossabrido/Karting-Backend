import mongoose from "mongoose";
const Opinion = mongoose.model('Opinion', new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    opinion: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    created_at: Date,
    deleted_at: Date,
}, { versionKey: false }));
export default Opinion;
//# sourceMappingURL=model.js.map