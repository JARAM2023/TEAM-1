import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Days } from './day.schema';
import { DayRequestDto } from './dto/days.request.dto';

@Injectable()
export class DaysRepository {
  constructor(@InjectModel(Days.name) private readonly dayModel: Model<Days>) {}

  async addDays(days: DayRequestDto) {
    const result = new this.dayModel(days);
    //다른 도큐먼트(comment)랑 연결해준다. join같은거임 -> 게시글에 댓글까지 가져온다.
    return await result.save();
  }
}
