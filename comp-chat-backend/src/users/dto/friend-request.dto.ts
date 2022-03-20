import { ApiProperty} from "@nestjs/swagger";

export class FriendRequestDto{
    @ApiProperty()
    senderusername: string
    @ApiProperty()
    recieverusername: string
}