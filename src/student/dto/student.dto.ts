import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  yearStarted: string;

  @Field()
  email: string;
}

@InputType()
export class UpdateStudentInput {
  @Field((type) => Int)
  id: number;

  @Field()
  email: string;
}
