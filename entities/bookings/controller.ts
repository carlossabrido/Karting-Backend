import express from "express";
import Bookings from "./model.js";


export const createBooking = async (data) => {
  if(data.start_date > data.end_date){
    throw new Error ('INVALID_DATE')
  }
  if(data.token.role === 'client'){
    data.body.client = data.token.id;
  }
  if(data.token.role === 'admin'){
    data.body.client = data.token.id;
  }
  data.body.created_at = new Date();
  const booking= new Bookings(data.body);
  return await booking.save();
  };

    export const listBookings= async (data) => {
    const bookingType = new RegExp(data.query.type, "i");
    const bookingClient = new RegExp(data.query.client, "i");
    // const startDate = new Date(data.query.start_date);
    // const endDate = new Date(data.query.end_date);
  
    let filter: any = {
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
      { path: "client", select: ["name", "lastname"] },
      { path: "type", select: ["circuit"] }
    ];
  
    return await Bookings.find(filter, projection)
      .populate(populateOptions)
      .sort({ start_date: -1 });
  };