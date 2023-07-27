import { Module } from '@nestjs/common';
import { DayController } from './controllers/day.controller';
import { DayService } from './services/day.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Days, daySchema } from './day.schema';
import { DaysRepository } from './day.repository';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Days.name,
        schema: daySchema,
      },
    ]),
  ],
  controllers: [DayController],
  providers: [DayService, DaysRepository],
})
export class DayModule {}
