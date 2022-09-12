import * as path from "path"
import { Module } from '@nestjs/common';
import { CitiesModule } from './cities/cities.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cities } from './cities/cities.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

export const root: string = path.resolve(__dirname, "..")

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: `${root}/cities.db`,
      entities: [Cities],
      logging: true
    }),
    CitiesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
