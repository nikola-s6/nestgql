import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { StudentExam } from './student-exam.entity';

@Injectable()
export class StudentExamRepository extends Repository<StudentExam> {
  constructor(private dataSource: DataSource) {
    super(
      StudentExam,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }
}
