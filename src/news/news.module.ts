import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { New, NewsSchema } from './schemas/news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: New.name, schema: NewsSchema},
    ]),
  ],
  providers: [NewsService],
  controllers: [NewsController],
  exports: [NewsService],
})
export class NewsModule {}
