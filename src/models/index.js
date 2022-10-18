// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MemberInfo } = initSchema(schema);

export {
  MemberInfo
};