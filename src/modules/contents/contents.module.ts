import { Module } from '@nestjs/common';
import { ContentsService } from '@modules/contents/contents.service';
import { ContentsController } from '@modules/contents/contents.controller';
import { MoviesModule } from '@modules/contents/providers/movies/movies.module';
import { SpotifyModule } from '@modules/contents/providers/spotify/spotify.module';
import { BooksModule } from '@modules/contents/providers/books/books.module';

@Module({
  // Importing the necessary modules for the ContentsModule
  imports: [MoviesModule, SpotifyModule, BooksModule],
  providers: [ContentsService],
  controllers: [ContentsController],
})
export class ContentsModule {}
