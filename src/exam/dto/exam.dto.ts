import { InputType, Field } from '@nestjs/graphql';
import { Department } from 'src/department/department.entity';
import { DepartmentInput } from 'src/department/dto/department.dto';

@InputType()
export class ExamInput {
  @Field()
  name: string;
}

@InputType()
export class CreateExamInput {
  @Field()
  name: string;

  @Field((type) => DepartmentInput)
  department: DepartmentInput;
}
