import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentRepository extends Repository<Student> {
  constructor(private dataSource: DataSource) {
    super(
      Student,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }
}
