import { ApiProperty } from '@nestjs/swagger';

export class GetUsersDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
