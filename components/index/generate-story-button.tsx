import { Button } from "@/components/ui/button";
import { Character } from "@/pages";
import { ChatRequestOptions, CreateMessage, Message } from "ai";
import React from "react";

interface GenerateStoryButtonProps {
  isLoading: boolean;
  tone: string;
  genre: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
  characters: Character[];
}

const messages: string[] = [];

const GenerateStoryButton: React.FC<GenerateStoryButtonProps> = ({
  isLoading,
  tone,
  genre,
  append,
  characters,
}) => {
  const handleButtonClick = async () => {
    messages.push(`Generate a story with genre ${genre} and tone ${tone}`);
    if (characters.length > 0) {
      for (const item of characters) {
        messages.push(
          `Add this character to the story with the name ${item.character}, with these description ${item.description} and personality ${item.personality}`,
        );
      }
      messages.push(
        "At the end, summarize how each character contributes to the story.",
      );
    }
    append({ role: "user", content: messages.join(".") });
  };

  return (
    <Button disabled={isLoading || !genre || !tone} onClick={handleButtonClick}>
      {isLoading ? "Generating story..." : "Generate Story"}
    </Button>
  );
};

export { GenerateStoryButton };
