import { Exam } from 'src/exam/exam.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Department {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [Exam], {
    nullable: 'items',
  })
  @OneToMany(() => Exam, (exam) => exam.department)
  exams: Exam[];
}
