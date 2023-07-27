import { PickType } from '@nestjs/swagger';
import { Days } from '../day.schema';

//Picktype을 통해 password를 제외한 원하는 객체들만 가져온다.
export class DayRequestDto extends PickType(Days, ['day'] as const) {}
