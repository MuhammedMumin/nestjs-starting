import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) { }

  create(createBookDto: Prisma.BooksUncheckedCreateInput) { // Updated datatype from BooksCreateInput because of the update to the schema
    return this.prisma.books.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prisma.books.findMany({
      include: {
        Author: true
      }
    });
  }

  findOne(bookWhereUniqueInput: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.findUnique({
      where: bookWhereUniqueInput,
    });
  }

  update(where: Prisma.BooksWhereUniqueInput, data: Prisma.BooksUpdateInput) {
    return this.prisma.books.update({
      data,
      where,
    });
  }

  remove(where: Prisma.BooksWhereUniqueInput) {
    return this.prisma.books.delete({
      where,
    });
  }
}
