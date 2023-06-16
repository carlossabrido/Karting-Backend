import mongoose, { Schema } from "mongoose";
const Bookings = mongoose.model('Bookings', new mongoose.Schema({
    type: {
        type: Schema.Types.Mixed,
        require: true,
        ref: 'Circuit'
    },
    name: {
        type: Schema.Types.Mixed,
        require: true,
        ref: 'Circuit'
    },
    client: {
        type: Schema.Types.Mixed,
        require: true,
        ref: 'User'
    },
    start_date: {
        type: Date,
        require: true
    },
    // end_date:{
    //     type: Date
    // },
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
}, { versionKey: false }));
export default Bookings;
//# sourceMappingURL=model.js.map