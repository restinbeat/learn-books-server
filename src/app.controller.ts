import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @ApiExcludeEndpoint()
  helloWorld() {
    return `
    <title>북스 서버</title>
    <h2>북스 서버</h2>
    안녕하세요 Books 서버입니다 😃
    <br/>
    <br/>
    자세한 API 호출 안내는 <a href="/api">/api</a>로 접속해주세요!`;
  }
}
