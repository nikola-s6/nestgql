import { Injectable} from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { Student } from './student.entity';
import { CreateStudentInput, UpdateStudentInput } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async findAll(): Promise<Array<Student>> {
    return this.studentRepository.find({
      relations: {
        examAttempts: true,
      },
    });
  }

  async save(student: CreateStudentInput): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async find(id: number): Promise<Student> {
    return this.studentRepository.findOne({
      where: {
        id,
      },
      relations: {
        examAttempts: true,
      },
    });
  }

  async update(student: UpdateStudentInput): Promise<Student> {
    await this.studentRepository.save(student);
    return this.studentRepository.findOne({
      where: {
        id: student.id,
      },
      relations: {
        examAttempts: true,
      },
    });
  }

  async delete(id: number) {
    try {
      await this.studentRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
