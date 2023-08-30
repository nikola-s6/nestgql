import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Exam } from './exam.entity';
import { ExamService } from './exam.service';
import { ExamInput, CreateExamInput } from './dto/exam.dto';

@Resolver((of) => Exam)
export class ExamResolver {
  constructor(private readonly examService: ExamService) {}

  @Query((returns) => [Exam], { name: 'exams' })
  async getExams(): Promise<Array<Exam>> {
    return this.examService.findAll();
  }

  @Query((returns) => Exam, { name: 'exam' })
  async getExam(@Args('id', { type: () => Int }) id: number): Promise<Exam> {
    return this.examService.find(id);
  }

  @Mutation((returns) => Exam)
  async addExam(@Args('createExamInput') exam: CreateExamInput): Promise<Exam> {
    return this.examService.create(exam);
  }
}
