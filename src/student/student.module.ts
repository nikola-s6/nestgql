import { Module } from '@nestjs/common';
import { StudentExam } from 'src/student-exam/student-exam.entity';
import { Student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [],
  providers: [StudentResolver, StudentService, StudentRepository],
})
export class StudentModule {}
