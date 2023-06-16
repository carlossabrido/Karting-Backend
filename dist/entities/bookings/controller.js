import Bookings from "./model.js";
export const createBooking = async (data) => {
    // const today= new Date()
    // const BookingDate= new Date(data.start_date)
    //   if(BookingDate < today){
    //     throw new Error ('INVALID_DATE')
    //   }
    if (data.token.role === 'client') {
        data.body.client = data.token.id;
    }
    if (data.token.role === 'admin') {
        data.body.client = data.token.id;
    }
    data.body.created_at = new Date();
    const booking = new Bookings(data.body);
    return await booking.save();
};
export const listBookings = async (data) => {
    const bookingType = new RegExp(data.query.type, "i");
    const bookingClient = new RegExp(data.query.client, "i");
    let filter = {
        deleted_at: null
    };
    if (data.token.role === "client") {
        filter.client = data.token.id;
    }
    if (data.token.role === "admin") {
        if (data.query.client) {
            filter.client = bookingClient;
        }
        if (data.query.type) {
            filter.type = bookingType;
        }
    }
    const projection = { type: 1, start_date: 1, end_date: 1 };
    const populateOptions = [
        { path: "client", select: ["name", "lastname", "email"] },
        { path: "type", select: ["circuit"] }
    ];
    return await Bookings.find(filter, projection)
        .populate(populateOptions)
        .sort({ start_date: -1 });
};
export const modifyBooking = async (data) => {
    if (data.body.start_date > data.body.end_date) {
        throw new Error('INVALID_DATE');
    }
    const booking = await Bookings.findOne({ _id: data.params.id, deleted_at: null });
    if (!booking) {
        throw new Error("BOOKING_NOT_FOUNDDD");
    }
    console.log(booking, 'djnsjlknl');
    if (data.token.role == 'client' && booking.client != data.token.id || data.token.role == 'admin' && booking.admin != data.token._id) {
        throw new Error("AUTH_REQUIRED");
    }
    data.body.updated_at = new Date();
    data.body.client = data.token.id;
    const updatedBooking = await Bookings.findByIdAndUpdate({ _id: data.params.id, client: data.token.id }, { $set: data.body }, { new: true });
    return updatedBooking;
};
export const deleteBooking = async (data) => {
    const booking = Bookings.findOne({ _id: data.params.id, deleted_at: null });
    if (!booking) {
        throw new Error("BOOKING_DONT_EXIST");
    }
    if (data.token.role == 'client' && booking.client != data.token.id || data.token.role == 'admin' && booking.admin != data.token._id) {
        throw new Error("AUTH_REQUIRED");
    }
    data.body.deleted_at = new Date();
    data.body.client = data.token.id;
    const deletedBookings = await Bookings.findByIdAndUpdate({ _id: data.params.id, client: data.token.id }, { $set: data.body }, { new: true });
    return deletedBookings;
};
//# sourceMappingURL=controller.js.map