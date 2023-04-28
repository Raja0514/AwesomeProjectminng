// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Metstruckplod } = initSchema(schema);

export {
  Metstruckplod
};