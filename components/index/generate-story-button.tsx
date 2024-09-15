import { Button } from "@/components/ui/button";

const GenerateStoryButton = ({
  generatingStory,
  setGeneratingStory,
}: {
  generatingStory: boolean;
  setGeneratingStory: (generatingStory: boolean) => void;
}) => {
  const handleButtonClick = async () => {
    setGeneratingStory(true);
  };

  return (
    <Button disabled={generatingStory} onClick={handleButtonClick}>
      {generatingStory ? "Generating story..." : "Generate story"}
    </Button>
  );
};

export { GenerateStoryButton };
