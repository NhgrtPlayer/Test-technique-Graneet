import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from "./cities.controller";
import { CitiesService } from "./cities.service";
import { Cities } from "./cities.entity";

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [TypeOrmModule.forFeature([Cities])],
})
export class CitiesModule {}