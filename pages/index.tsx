import Head from "next/head";
import { useId, useState } from "react";

import { BuildIndexButton } from "@/components/index/build-index-button";
import { ContextQuery } from "@/components/index/context-query";
import { ContextSettings } from "@/components/index/context-settings";
import { Settings } from "@/components/index/settings";
import { SourceText } from "@/components/index/source-text";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import essay from "@/lib/essay";

const DEFAULT_CHUNK_SIZE = 1024;
const DEFAULT_CHUNK_OVERLAP = 20;
const DEFAULT_TOP_K = 2;
const DEFAULT_TEMPERATURE = 0.1;
const DEFAULT_TOP_P = 1;

export default function Home() {
  const answerId = useId();
  const queryId = useId();
  const sourceId = useId();
  const [text, setText] = useState(essay);
  const [query, setQuery] = useState("");
  const [needsNewIndex, setNeedsNewIndex] = useState(true);
  const [buildingIndex, setBuildingIndex] = useState(false);
  const [runningQuery, setRunningQuery] = useState(false);
  const [nodesWithEmbedding, setNodesWithEmbedding] = useState([]);
  const [chunkSize, setChunkSize] = useState(DEFAULT_CHUNK_SIZE.toString());
  const [chunkOverlap, setChunkOverlap] = useState(
    DEFAULT_CHUNK_OVERLAP.toString(),
  );
  const [topK, setTopK] = useState(DEFAULT_TOP_K.toString());
  const [temperature, setTemperature] = useState(
    DEFAULT_TEMPERATURE.toString(),
  );
  const [topP, setTopP] = useState(DEFAULT_TOP_P.toString());
  const [answer, setAnswer] = useState("");

  return (
    <>
      <Head>
        <title>Storyteller</title>
      </Head>
      <main className="mx-2 flex h-full flex-col lg:mx-56">
        <Settings
          chunkSize={chunkSize}
          setChunkSize={setChunkSize}
          chunkOverlap={chunkOverlap}
          setChunkOverlap={setChunkOverlap}
          setNeedsNewIndex={setNeedsNewIndex}
        />
        <SourceText
          setText={setText}
          text={text}
          sourceId={sourceId}
          setNeedsNewIndex={setNeedsNewIndex}
        />
        <BuildIndexButton
          needsNewIndex={needsNewIndex}
          buildingIndex={buildingIndex}
          runningQuery={runningQuery}
          setAnswer={setAnswer}
          setBuildingIndex={setBuildingIndex}
          setNeedsNewIndex={setNeedsNewIndex}
          setNodesWithEmbedding={setNodesWithEmbedding}
          text={text}
          chunkSize={chunkSize}
          chunkOverlap={chunkOverlap}
        />
        {!buildingIndex && !needsNewIndex && !runningQuery && (
          <>
            <ContextSettings
              topK={topK}
              setTopK={setTopK}
              temperature={temperature}
              setTemperature={setTemperature}
              topP={topP}
              setTopP={setTopP}
            />
            <ContextQuery
              queryId={queryId}
              query={query}
              setQuery={setQuery}
              needsNewIndex={needsNewIndex}
              buildingIndex={buildingIndex}
              runningQuery={runningQuery}
              setAnswer={setAnswer}
              setRunningQuery={setRunningQuery}
              nodesWithEmbedding={nodesWithEmbedding}
              temperature={temperature}
              topP={topP}
              topK={topK}
            />
            <div className="my-2 flex h-1/4 flex-auto flex-col space-y-2">
              <Label htmlFor={answerId}>Answer:</Label>
              <Textarea
                className="flex-1"
                readOnly
                value={answer}
                id={answerId}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}
