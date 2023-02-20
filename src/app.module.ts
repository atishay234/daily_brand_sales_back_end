import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { brand_sales_dailyModule } from './brand_sales_daily/brand_sales_daily.module';

@Module({
  imports: [
    brand_sales_dailyModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
