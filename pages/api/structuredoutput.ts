import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI();

const StoryExtraction = z.object({
  characters: z.array(
    z.object({
      character: z.string(),
      description: z.string(),
      personality: z.string(),
    }),
  ),
});

const getStructuredData = async (text: string) => {
  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system",
        content:
          "You are an expert at structured data extraction. You will be given unstructured text and should convert it into the given structure.",
      },
      { role: "user", content: text },
    ],
    response_format: zodResponseFormat(
      StoryExtraction,
      "story_text_extraction",
    ),
  });

  return completion.choices[0].message.parsed;
};

export default getStructuredData;
