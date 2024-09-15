import { Button } from "@/components/ui/button";
import { Answer } from "@/pages";

// Query
const QUERY = "List the name, description, and personality of every character";

// Settings
const DEFAULT_CHUNK_SIZE = 3000;
const DEFAULT_CHUNK_OVERLAP = 20;
const DEFAULT_TOP_K = 2;
const DEFAULT_TEMPERATURE = 0.1;
const DEFAULT_TOP_P = 1.0;

const ExtractCharactersButton = ({
  needsNewIndex,
  buildingIndex,
  runningQuery,
  setRunningQuery,
  setAnswer,
  setBuildingIndex,
  setNeedsNewIndex,
  text,
}: {
  needsNewIndex: boolean;
  buildingIndex: boolean;
  runningQuery: boolean;
  setRunningQuery: (runningQuery: boolean) => void;
  setAnswer: (answer: Answer) => void;
  setBuildingIndex: (buildingIndex: boolean) => void;
  setNeedsNewIndex: (needsNewIndex: boolean) => void;
  text: string;
}) => {
  const handleButtonClick = async () => {
    setBuildingIndex(true);
    setNeedsNewIndex(false);
    const result = await fetch("/api/splitandembed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        document: text,
        chunkSize: DEFAULT_CHUNK_SIZE,
        chunkOverlap: DEFAULT_CHUNK_OVERLAP,
      }),
    });

    const { error, payload } = await result.json();
    if (error) console.log(error);
    if (payload) await handleQuerySubmit(payload.nodesWithEmbedding);

    setBuildingIndex(false);
  };

  const handleQuerySubmit = async (nodesWithEmbedding: unknown) => {
    setRunningQuery(true);
    const result = await fetch("/api/retrieveandquery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        nodesWithEmbedding: nodesWithEmbedding,
        topK: DEFAULT_TOP_K,
        temperature: DEFAULT_TEMPERATURE,
        topP: DEFAULT_TOP_P,
      }),
    });

    const { error, payload } = await result.json();
    if (error) console.log(error);
    if (payload) setAnswer(JSON.parse(payload.response) as Answer);

    setRunningQuery(false);
  };

  return (
    <Button
      disabled={!needsNewIndex || buildingIndex || runningQuery}
      onClick={handleButtonClick}
    >
      {buildingIndex ? "Extracting characters..." : "Extract characters"}
    </Button>
  );
};

export { ExtractCharactersButton };
