import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty()
  private readonly name: string;
  @ApiProperty()
  private readonly gender: string;
  @ApiProperty()
  private readonly age: number;
  @ApiProperty()
  private readonly interests: string[];
}
