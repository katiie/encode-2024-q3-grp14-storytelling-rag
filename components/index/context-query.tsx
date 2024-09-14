import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent } from "react";

const ContextQuery = ({
  queryId,
  query,
  setQuery,
  needsNewIndex,
  buildingIndex,
  runningQuery,
  setAnswer,
  setRunningQuery,
  nodesWithEmbedding,
  temperature,
  topP,
  topK,
}: {
  queryId: string;
  query: string;
  setQuery: (query: string) => void;
  needsNewIndex: boolean;
  buildingIndex: boolean;
  runningQuery: boolean;
  setAnswer: (answer: string) => void;
  setRunningQuery: (runningQuery: boolean) => void;
  nodesWithEmbedding: any;
  temperature: string;
  topP: string;
  topK: string;
}) => {
  return (
    <div className="my-2 space-y-2">
      <Label htmlFor={queryId}>Query:</Label>
      <div className="flex w-full space-x-2">
        <Input
          id={queryId}
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
          }}
        />
        <Button
          type="submit"
          disabled={needsNewIndex || buildingIndex || runningQuery}
          onClick={async () => {
            setAnswer("Running query...");
            setRunningQuery(true);
            // Post the query and nodesWithEmbedding to the server
            const result = await fetch("/api/retrieveandquery", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query,
                nodesWithEmbedding,
                topK: parseInt(topK),
                temperature: parseFloat(temperature),
                topP: parseFloat(topP),
              }),
            });

            const { error, payload } = await result.json();

            if (error) {
              setAnswer(error);
            }

            if (payload) {
              setAnswer(payload.response);
            }

            setRunningQuery(false);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export { ContextQuery };
