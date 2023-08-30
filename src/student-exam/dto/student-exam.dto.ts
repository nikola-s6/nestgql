import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateExamAttemptInput {
  @Field((type) => Int)
  studentId: number;

  @Field((type) => Int)
  examId: number;

  @Field((type) => Int)
  grade: number;
}

@InputType()
export class UpdateExamAttemptInput {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  grade: number;
}
