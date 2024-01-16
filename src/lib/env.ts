import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  PEXEL_KEY: str({
    default: ''
  }),
});

export default env;
