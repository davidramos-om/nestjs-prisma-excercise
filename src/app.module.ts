import { Module } from '@nestjs/common';

import { CommunityController } from 'src/modules/feed.controller';
import { PostService } from 'src/modules/posts/post.service';
import { UserService } from 'src/modules/users/user.service';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ AppController, CommunityController ],
  providers: [ AppService, PrismaService, PostService, UserService ]
})
export class AppModule { }
