# Storyteller RAG with LlamaIndex.TS + OpenAI

This is a simple web application that, based on an initial story or text, extracts the characters from it, defining their name, description, and personality. Once extracted, these are presented in a table and can be reused in a new story, but defining a genre and tone for the new story.

![Captura de pantalla 2024-09-15 a las 16 38 57-fullpage](https://github.com/user-attachments/assets/ed93bf3b-115f-47be-b615-f283c65e67c2)


## Getting Started

Run `pnpm install` and `pnpm run dev`. 

Make sure to set your OpenAI key: `export OPENAI_API_KEY-="sk-..."`

Explore the application at http://localhost:3000 🎉

**Important:** For extracting characters, you should upload a `*.txt` file with an story or related text.

## Sample Stories

🗄️ [Stories.zip](https://github.com/user-attachments/files/17007762/Stories.zip) 

## Resources

* [LlamaIndex.TS](https://ts.llamaindex.ai/)
* [Structured Outputs](https://openai.com/index/introducing-structured-outputs-in-the-api/)
* [OpenAI API](https://openai.com/index/openai-api/)
