import { StudentExam } from 'src/student-exam/student-exam.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Student {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column('year')
  yearStarted: string;

  @Field()
  @Column()
  email: string;

  @Field((type) => [StudentExam], {
    nullable: 'items',
  })
  @OneToMany(() => StudentExam, (studentExam) => studentExam.student)
  examAttempts: StudentExam[];
}
