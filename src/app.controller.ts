import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';


import { ApiProperty, ApiHeader } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  userinp: string;
}

@ApiHeader({
  name: 'Content-Type',
  description: 'application/json',
})
@Controller('custom_product/b2c/index.php')
export class AppController {

  @Post('flight/flight/service/AirportList') 
  AirportList(@Body() AirportList: CreateCatDto){}
  @Get('flight/flight/service/CabinClass') CabinClass(){}
  @Get('flight/flight/service/AirlineList') AirlineList(){}

  @Get('home/home/service/SearchModule') SearchModule(){}
  @Get('home/home/service/TourStyle') TourStyle(){}
  @Get('home/home/service/TopAirline') TopAirline(){}
  @Get('home/home/service/WhyChooseUs') WhyChooseUs(){}
  @Get('home/home/service/SocialLinks') SocialLinks(){}
  @Get('home/home/service/CmsLinks') CmsLinks(){}
  @Get('home/home/service/FooterAddress') FooterAddress(){}

  @Get('hotel/hotel/service/HotelCityList') HotelCityList(){}

  @Get('bus/bus/service/BusCityList') BusCityList(){}


}
