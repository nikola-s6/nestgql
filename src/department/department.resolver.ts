import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';
import { CreateDepartmentInput } from './dto/department.dto';

@Resolver((of) => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Query((returns) => [Department], { name: 'departments' })
  async getDepartments(): Promise<Array<Department>> {
    return this.departmentService.findAll();
  }

  @Query((returns) => Department, { name: 'department' })
  async getDepartment(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Department> {
    return this.departmentService.find(id);
  }

  @Mutation((returns) => Department)
  async addDepartment(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
  ): Promise<Department> {
    return this.departmentService.save(createDepartmentInput);
  }
}
