import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { CreateStudentInput, UpdateStudentInput } from './dto/student.dto';

@Resolver((of) => Student)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query((returns) => [Student], { name: 'students' })
  async getAllStudents(): Promise<Array<Student>> {
    return this.studentService.findAll();
  }

  @Query((returns) => Student, { name: 'student' })
  async getOneStudent(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Student> {
    return this.studentService.find(id);
  }

  @Mutation((returns) => Student)
  async addStudent(
    @Args('createStudentInput') student: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.save(student);
  }

  @Mutation((returns) => Student)
  async updateStudent(
    @Args('updateStudentInput') student: UpdateStudentInput,
  ): Promise<Student> {
    return this.studentService.update(student);
  }

  @Mutation((returns) => Boolean)
  async deleteStudent(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    try {
      this.studentService.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
