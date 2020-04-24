import 'reflect-metadata';
import express from 'express';
import jsonServer from 'json-server';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import buildSchema from './schema';

dotenv.config();

const port = process.env.PORT;
const isDev = process.env.NODE_ENV === "development";
const playground = isDev ? true : false;

async function bootstrap(): Promise<void> {

    const app = express();
    const schema = await buildSchema();
    const jsonServerRouter = jsonServer.router('src/database/data.json');
    const jsonServerMiddlewares = jsonServer.defaults();
    const apolloServer = new ApolloServer({
        schema,
        playground
    });

    app.use(jsonServerMiddlewares);
    app.use("/json/data", jsonServerRouter);

    apolloServer.applyMiddleware({ app });

    app.listen(port, () => {
        console.log(`GraphQL listening on port ${port}`);
    });

}

bootstrap();