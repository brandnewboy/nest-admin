import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

//角色和部门关联表  角色1-N部门
@Entity('sys_role_dept', {
  comment: '角色和部门关联表',
})
export class SysRoleWithDeptEntity {
  @PrimaryColumn({ type: 'bigint', name: 'role_id', default: 0, comment: '角色ID' })
  public roleId: string;

  @PrimaryColumn({ type: 'bigint', name: 'dept_id', default: 0, comment: '部门ID' })
  public deptId: string;
}
