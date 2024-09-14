import { Button } from "@/components/ui/button";

const BuildIndexButton = ({
  needsNewIndex,
  buildingIndex,
  runningQuery,
  setAnswer,
  setBuildingIndex,
  setNeedsNewIndex,
  setNodesWithEmbedding,
  text,
  chunkSize,
  chunkOverlap,
}: {
  needsNewIndex: boolean;
  buildingIndex: boolean;
  runningQuery: boolean;
  setAnswer: (answer: string) => void;
  setBuildingIndex: (buildingIndex: boolean) => void;
  setNeedsNewIndex: (needsNewIndex: boolean) => void;
  setNodesWithEmbedding: (nodesWithEmbedding: any) => void;
  text: string;
  chunkSize: string;
  chunkOverlap: string;
}) => {
  return (
    <Button
      disabled={!needsNewIndex || buildingIndex || runningQuery}
      onClick={async () => {
        setAnswer("Building index...");
        setBuildingIndex(true);
        setNeedsNewIndex(false);
        // Post the text and settings to the server
        const result = await fetch("/api/splitandembed", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document: text,
            chunkSize: parseInt(chunkSize),
            chunkOverlap: parseInt(chunkOverlap),
          }),
        });
        const { error, payload } = await result.json();

        if (error) {
          setAnswer(error);
        }

        if (payload) {
          setNodesWithEmbedding(payload.nodesWithEmbedding);
          setAnswer("Index built!");
        }

        setBuildingIndex(false);
      }}
    >
      {buildingIndex ? "Building Vector index..." : "Build index"}
    </Button>
  );
};

export {BuildIndexButton};
