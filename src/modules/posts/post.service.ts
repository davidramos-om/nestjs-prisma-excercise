import { Injectable, Logger } from '@nestjs/common';
import { EventPattern } from "@nestjs/microservices";
import { Post, Prisma } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) { }

    @EventPattern('get_post')
    async post(
        postWhereUniqueInput: Prisma.PostWhereUniqueInput,
    ): Promise<Post | null> {
        Logger.log(" post event pattern called", "PostService");
        return this.prisma.post.findUnique({
            where: postWhereUniqueInput,
        });
    }

    @EventPattern('get_posts')
    async posts(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PostWhereUniqueInput;
        where?: Prisma.PostWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[]> {
        Logger.log(" posts event pattern called", "PostService");
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.post.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    @EventPattern('create_post')
    async createPost(data: Prisma.PostCreateInput): Promise<Post> {
        Logger.log(" create post event pattern called", "PostService");
        return this.prisma.post.create({
            data,
        });
    }

    @EventPattern('update_post')
    async updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput;
    }): Promise<Post> {
        Logger.log(" update post event pattern called", "PostService");
        const { data, where } = params;
        return this.prisma.post.update({
            data,
            where,
        });
    }

    @EventPattern('delete_post')
    async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
        Logger.log(" delete post event pattern called", "PostService");
        return this.prisma.post.delete({
            where,
        });
    }
}