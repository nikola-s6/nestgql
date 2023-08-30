import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Exam } from './exam.entity';

@Injectable()
export class ExamRepository extends Repository<Exam> {
  constructor(private dataSource: DataSource) {
    super(
      Exam,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }
}
