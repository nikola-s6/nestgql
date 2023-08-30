import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './exam.entity';
import { Module } from '@nestjs/common';
import { ExamRepository } from './exam.repository';
import { ExamResolver } from './exam.resolver';
import { ExamService } from './exam.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exam])],
  controllers: [],
  providers: [ExamRepository, ExamResolver, ExamService],
  exports: [],
})
export class ExamModule {}
