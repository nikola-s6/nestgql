import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentExam } from './student-exam.entity';
import { StudentExamService } from './student-exam.service';
import { StudentExamRepository } from './student-exam.repository';
import { StudentExamResolver } from './student-exam.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([StudentExam])],
  controllers: [],
  providers: [StudentExamResolver, StudentExamService, StudentExamRepository],
})
export class StudentExamModule {}
