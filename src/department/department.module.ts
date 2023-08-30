import { Module } from '@nestjs/common';
import { Department } from './department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentResolver } from './department.resolver';
import { DepartmentService } from './department.service';
import { DepartmentRepository } from './department.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [],
  providers: [DepartmentResolver, DepartmentService, DepartmentRepository],
})
export class DepartmentModule {}
