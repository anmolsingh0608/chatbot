import { Configuration, OpenAIApi } from "openai";
const openaiApiKey = "";
const configuration = new Configuration({
  apiKey: openaiApiKey,
});

export const openai = new OpenAIApi(configuration);
