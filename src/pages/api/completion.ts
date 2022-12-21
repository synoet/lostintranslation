import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { from, to, text } = req.query;
  console.log(from, text, to);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Take the following ${from} phrase, and translate it to ${to}. DO NOT give me a word-for-word translation, but instead, try and explain in german what this sentence is trying to convey. For example the phrase 'its not you, its me' commonly refers to someone explaining that the contextual problem is not with the other person, but it is me who is at fault.\n\n${text}\n\n\n.`,
    temperature: 0.35,
    max_tokens: 256,
    top_p: 1,
    best_of: 4,
    frequency_penalty: 0.4,
    presence_penalty: 0,
  });

  if (!response || !response.data || (response.data as any).choices.length === 0) {
    return res.status(500).send("Failed");
  }

  res.status(200).send((response.data as any).choices[0].text);
}
