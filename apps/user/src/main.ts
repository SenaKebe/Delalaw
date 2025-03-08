async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002); // Change port if needed
}
bootstrap();
