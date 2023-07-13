import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,

      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: '*',
      },
      buildSchemaOptions: {
        fieldMiddleware: [],
      },
    }),
    TaskModule,
  ],
})
export class AppModule {}
