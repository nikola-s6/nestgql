import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentRepository extends Repository<Department> {
  constructor(private dataSource: DataSource) {
    super(
      Department,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }
}
