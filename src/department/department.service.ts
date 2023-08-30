import { Injectable } from '@nestjs/common';
import { Department } from './department.entity';
import { DepartmentRepository } from './department.repository';
import { CreateDepartmentInput } from './dto/department.dto';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async findAll(): Promise<Array<Department>> {
    return this.departmentRepository.find({
      relations: {
        exams: true,
      },
    });
  }

  async find(id: number): Promise<Department> {
    return this.departmentRepository.findOne({
      where: {
        id,
      },
      relations: {
        exams: true,
      },
    });
  }

  async save(createDepartmentInput: CreateDepartmentInput) {
    return this.departmentRepository.save(createDepartmentInput);
  }
}
