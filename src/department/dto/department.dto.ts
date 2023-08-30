import { InputType, Field, Int } from '@nestjs/graphql';
import { ExamInput } from 'src/exam/dto/exam.dto';
import { Exam } from 'src/exam/exam.entity';

@InputType()
export class CreateDepartmentInput {
  @Field()
  name: string;

  @Field((type) => [ExamInput], { nullable: true })
  exams: ExamInput[];
}

@InputType()
export class DepartmentInput {
  @Field((type) => Int)
  id: number;
}
