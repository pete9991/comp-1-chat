import { Document } from 'mongoose';

export class Match extends Document {
  private readonly userUUID: string;
  private readonly likes: string[];
  private readonly dislikes: string[];
}
