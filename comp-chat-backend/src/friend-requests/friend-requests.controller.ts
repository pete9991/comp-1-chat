import { Controller, Get, Post, Body, Patch, Param, Delete, Inject} from '@nestjs/common';
import { FriendRequestsService } from '../domain/friend-requests.service';
import { CreateFriendRequestDto} from "./dto/create-friend-requests.dto";
import { UpdateFriendRequestDto } from './dto/update-friend-request.dto';
import { FriendRequest } from '../core/friend-request.entity';
import {FriendRequestDto} from "../users/dto/friend-request.dto";

@Controller('friend-requests')
export class FriendRequestsController {
    constructor(
        @Inject('FriendRequestsService')
        private readonly friendRequestsService: FriendRequestsService,
    ) {}

    @Post()
    create(@Body() createFriendRequestDto: FriendRequestDto) {
        return this.friendRequestsService.create(
            createFriendRequestDto.senderusername,
            createFriendRequestDto.recieverusername
        );
    }
    
    

    @Get()
    findAll() {
        return this.friendRequestsService.findAll();
    }

    @Get(':receivedUserUuid')
    getFriendRequests(
        @Param('receivedUserUuid') receivedUserUuid: string,
    ): Promise<FriendRequest[]> {
        return this.friendRequestsService.getFriendRequests(receivedUserUuid);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateFriendRequestDto: UpdateFriendRequestDto,
    ) {
        return this.friendRequestsService.update(+id, updateFriendRequestDto);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.friendRequestsService.delete(uuid);
    }
}