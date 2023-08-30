import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { StudentExam } from './student-exam.entity';
import { StudentExamService } from './student-exam.service';
import {
  CreateExamAttemptInput,
  UpdateExamAttemptInput,
} from './dto/student-exam.dto';

@Resolver((of) => StudentExam)
export class StudentExamResolver {
  constructor(private readonly studentExamService: StudentExamService) {}

  @Mutation((returns) => StudentExam)
  async addExamAttempt(
    @Args('createExamAttemptInput') attempt: CreateExamAttemptInput,
  ): Promise<StudentExam> {
    return this.studentExamService.create(attempt);
  }

  @Mutation((returns) => StudentExam)
  async updateExamAttempt(
    @Args('updateExamAttemptInput') attempt: UpdateExamAttemptInput,
  ): Promise<StudentExam> {
    return this.studentExamService.update(attempt);
  }
}
