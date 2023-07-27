import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsEmail, IsNotEmpty } from 'class-validator';
import { SchemaOptions, Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Days extends Document {
  //사용자에게 가능한 요일을 입력받는다.
  @Prop({
    required: true,
  })
  @IsArray()
  @IsNotEmpty()
  day: string[];
}

export const daySchema = SchemaFactory.createForClass(Days);
// const _CatSchema = SchemaFactory.createForClass(Cat);

// //클라이언트에 보낼 데이터만 가상화해서 보내준다.(password 숨길라고)
// _CatSchema.virtual('readOnlyData').get(function (this: Cat) {
//   return {
//     id: this.id,
//     email: this.email,
//     name: this.name,
//     imgUrl: this.imgUrl,
//     comments: this.comments,
//   };
// });

// //comments virtual 필드
// _CatSchema.virtual('comments', {
//   ref: 'comments', //스키마 이름
//   localField: '_id',
//   foreignField: 'info', //외래 필드, 외래키같은거? info 기준으로 comments가져온다.
// });

// //populate: 다른 도큐먼트랑 이어주는 메소드, 그것을 위한 옵션 설정- object와 json으로 변환가능하다!
// _CatSchema.set('toObject', { virtuals: true });
// _CatSchema.set('toJSON', { virtuals: true });

// export const CatSchema = _CatSchema;
