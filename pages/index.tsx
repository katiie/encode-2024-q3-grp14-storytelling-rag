import Head from "next/head";
import { useId, useState } from "react";

import { ExtractCharactersButton } from "@/components/index/extract-characters-button";
import { SourceText } from "@/components/index/source-text";
import { Label } from "@/components/ui/label";
import { CharactersTable } from "@/components/index/characters-table";

export type Answer = {
  characters: Character[];
};

export type Character = {
  character: string;
  description: string;
  personality: string;
};

const emptyAnswer = {
  characters: [
    {
      character: "",
      description: "",
      personality: "",
    },
  ],
};

export default function Home() {
  const answerId = useId();
  const sourceId = useId();
  const [text, setText] = useState("");
  const [needsNewIndex, setNeedsNewIndex] = useState(true);
  const [buildingIndex, setBuildingIndex] = useState(false);
  const [runningQuery, setRunningQuery] = useState(false);
  const [answer, setAnswer] = useState(emptyAnswer);

  return (
    <>
      <Head>
        <title>Storyteller</title>
      </Head>
      <main className="mx-2 flex h-full flex-col lg:mx-56">
        <SourceText
          setText={setText}
          text={text}
          sourceId={sourceId}
          setNeedsNewIndex={setNeedsNewIndex}
        />
        <ExtractCharactersButton
          needsNewIndex={needsNewIndex}
          buildingIndex={buildingIndex}
          runningQuery={runningQuery}
          setRunningQuery={setRunningQuery}
          setAnswer={setAnswer}
          setBuildingIndex={setBuildingIndex}
          setNeedsNewIndex={setNeedsNewIndex}
          text={text}
        />
        {!buildingIndex && !needsNewIndex && !runningQuery && (
          <>
            <div className="my-5 flex h-1/4 flex-auto flex-col space-y-2">
              <Label htmlFor={answerId}>Characters in the story:</Label>
              <CharactersTable characters={answer.characters} />
            </div>
          </>
        )}
      </main>
    </>
  );
}
