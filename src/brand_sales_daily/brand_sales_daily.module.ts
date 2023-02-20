import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { brand_sales_dailyController } from './brand_sales_daily.controller';
import { brand_sales_dailySchema } from './brand_sales_daily.model';
import { brand_sales_dailyService } from './brand_sales_daily.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'brand_sales_daily', schema: brand_sales_dailySchema },
    ]),
  ],
  controllers: [brand_sales_dailyController],
  providers: [brand_sales_dailyService],
})
export class brand_sales_dailyModule {}
