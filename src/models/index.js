// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Numberofloads, Reamers, Couplings, Shanks, Steels, Bits, Developmentdrilling, Loadinglocatins, Prestart, Metstruckplod } = initSchema(schema);

export {
  Numberofloads,
  Reamers,
  Couplings,
  Shanks,
  Steels,
  Bits,
  Developmentdrilling,
  Loadinglocatins,
  Prestart,
  Metstruckplod
};