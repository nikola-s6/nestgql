import { Injectable } from '@nestjs/common';
import {
  CreateExamAttemptInput,
  UpdateExamAttemptInput,
} from './dto/student-exam.dto';
import { StudentExam } from './student-exam.entity';
import { StudentExamRepository } from './student-exam.repository';

@Injectable()
export class StudentExamService {
  constructor(private readonly studentExamRepository: StudentExamRepository) {}

  async getAll(): Promise<Array<StudentExam>> {
    return this.studentExamRepository.find({
      relations: {
        exam: true,
        student: true,
      },
    });
  }

  async create(attempt: CreateExamAttemptInput): Promise<StudentExam> {
    const dbAttempt: StudentExam = await this.studentExamRepository.save(
      this.studentExamRepository.create({
        grade: attempt.grade,
        student: {
          id: attempt.studentId,
        },
        exam: {
          id: attempt.examId,
        },
      }),
    );
    return this.studentExamRepository.findOne({
      where: {
        id: dbAttempt.id,
      },
      relations: {
        student: true,
        exam: true,
      },
    });
  }

  async update(attempt: UpdateExamAttemptInput): Promise<StudentExam> {
    this.studentExamRepository.save(attempt);
    return this.studentExamRepository.findOne({
      where: {
        id: attempt.id,
      },
    });
  }
}
