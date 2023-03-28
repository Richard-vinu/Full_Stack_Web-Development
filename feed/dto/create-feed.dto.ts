
export enum IsVerified{
  TRUE="true",
  FALSE="false"
}

export class CreateFeedDto {
 
  email?: string;
  password?: string;
  verified:IsVerified
  createdAt?: Date;
  deletedAt?: Date;
}

