import { Injectable } from '@nestjs/common';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '.prisma/client';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) { }

  create(createAuthorDto: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(authorWhereUniqueInput: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({
      where: authorWhereUniqueInput,
    });
  }

  update(where: Prisma.AuthorWhereUniqueInput, data: Prisma.AuthorUpdateInput) {
    return this.prisma.author.update({
      data,
      where,
    });
  }

  remove(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({
      where,
    });
  }
}
