import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { brand_sales_daily } from './brand_sales_daily.model';

@Injectable()
export class brand_sales_dailyService {
  constructor(
    @InjectModel('brand_sales_daily')
    private readonly brand_sales_dailyModel: Model<brand_sales_daily>,
  ) {}

  async retrieveAllBrandSales() {
    try {
      const res = await this.brand_sales_dailyModel.find({});
      console.log(res);
      return res;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  }

  async addBrandSales(wholeBody: []) {
    try {
      return await this.brand_sales_dailyModel.collection.insertMany(wholeBody);
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  }
}
