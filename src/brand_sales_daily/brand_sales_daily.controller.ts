import { Body, Controller, Get, Post } from '@nestjs/common';
import { brand_sales_dailyService } from './brand_sales_daily.service';

@Controller('api/v1/brand_sales_daily')
export class brand_sales_dailyController {
  constructor(
    private readonly brand_sales_dailyService: brand_sales_dailyService,
  ) {}

  @Get()
  getAllBrandSales() {
    const AllBrandSales = this.brand_sales_dailyService.retrieveAllBrandSales();

    return AllBrandSales;
  }

  @Post()
  addBrandSales(@Body('') wholeBody) {
    return this.brand_sales_dailyService.addBrandSales(wholeBody);
  }
}
