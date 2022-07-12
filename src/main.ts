import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('NestMongoApp')
  .setDescription('Rest Api Built with NestJs and MongoDb Atlas')
  .setVersion('2.O')
  .addTag('NestApi')
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('doc',app,document);

  const port=3000;
  await app.listen(port,()=>console.log(`Server is at http://localhost:${port}`));
}
bootstrap();
