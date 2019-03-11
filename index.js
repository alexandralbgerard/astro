import express from 'express';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from './server/postgres/models/Astrology';
import schema from './graphql/';
import postgres from './server/postgres';
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  '/graphql',
  expressGraphQL((req, res) => ({
    schema: schema,
    graphiql: true,
    context: { req, res, models },
  }))
);

postgres
  .sync()
  .then(() => {
    console.log(
      'The postgres server is up and running - maybe you should go catch it!'
    );
    app.listen(4000, () => {
      console.log('now listening on port 4000');
    });
  })
  .catch(console.error);
