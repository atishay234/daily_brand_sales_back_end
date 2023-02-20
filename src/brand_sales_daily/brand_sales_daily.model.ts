import * as mongoose from 'mongoose';

export const brand_sales_dailySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  brand: {
    type: String,
  },
  transactionType: {
    type: String,
    enum: ['Trading', 'Facilitation'],
    require: true,
  },
  totalOrders: {
    type: Number,
  },
  totalOrderValue: {
    type: Number,
  },
  grossMarginPercentage: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export interface brand_sales_daily {
  id: string;
  date: Date;
  brand: String;
  transactionType: string;
  totalOrders: number;
  totalOrderValue: number;
  grossMarginPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}
