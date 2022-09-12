import { Controller, Get, Req, Query } from '@nestjs/common';
import { CitiesResponse } from 'src/interfaces/citiesResponse.interface';
import { Cities } from './cities.entity';
import { CitiesService } from './cities.service';

@Controller("cities")
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  async findAll(@Query("query") query: string = ""): Promise<CitiesResponse> {
    const cities: Cities[] = await this.citiesService.findAll(query);
    const overseasPostalCodesPrefix = ["971","972","973","974","975","976","977","978","986","987","988","984","989"]
    return cities.reduce((acc, city) => {
      const isOversea = (overseasPostalCode) => city.postalCode.toString().startsWith(overseasPostalCode)
      if (overseasPostalCodesPrefix.some(isOversea)) {
        acc.overseas.push(city)
      } else {
        acc.metropolitan.push(city)
      }
      return acc
    }, { metropolitan: [], overseas: [] })
  }
}
