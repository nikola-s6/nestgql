import { Exam } from 'src/exam/exam.entity';
import { Student } from 'src/student/student.entity';
import {
  Entity,
  CreateDateColumn,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
@Entity('student_exam')
export class StudentExam {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => GraphQLISODateTime)
  @CreateDateColumn()
  date: string;

  @Field((type) => Student)
  // @Column({ primary: true })
  @ManyToOne(() => Student, (student) => student.examAttempts)
  student: Student;

  @Field((type) => Exam)
  // @Column({ primary: true })
  @ManyToOne(() => Exam, (exam) => exam.studentsAttempts)
  exam: Exam;

  @Field((type) => Int)
  @Column()
  grade: number;
}
