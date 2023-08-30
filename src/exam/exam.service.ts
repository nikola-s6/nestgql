import { Injectable } from '@nestjs/common';
import { ExamRepository } from './exam.repository';
import { Exam } from './exam.entity';
import { ExamInput, CreateExamInput } from './dto/exam.dto';

@Injectable()
export class ExamService {
  constructor(private readonly examRepository: ExamRepository) {}

  async findAll(): Promise<Array<Exam>> {
    return this.examRepository.find();
  }

  async find(id: number): Promise<Exam> {
    return this.examRepository.findOne({
      where: {
        id,
      },
      relations: {
        department: true,
        studentsAttempts: true,
      },
    });
  }

  async create(exam: CreateExamInput): Promise<Exam> {
    return this.examRepository.save(exam);
  }
}
