import { Injectable } from '@nestjs/common';

@Injectable()
export class DayService {
  async dayCanculate() {
    return '계산';
  }

  async addDay(body: any) {
    return '가능한 요일을 db에 추가';
  }
}
