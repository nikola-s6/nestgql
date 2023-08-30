import { Department } from 'src/department/department.entity';
import { StudentExam } from 'src/student-exam/student-exam.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity()
export class Exam {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [StudentExam], {
    nullable: 'items',
  })
  @OneToMany(() => StudentExam, (studetnExam) => studetnExam.exam)
  studentsAttempts: StudentExam[];

  @Field((type) => Department)
  @ManyToOne(() => Department, (department) => department.exams)
  department: Department;
}
