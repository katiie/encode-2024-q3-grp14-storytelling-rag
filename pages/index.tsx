import Head from "next/head";
import { useId, useState } from "react";

import { CharactersTable } from "@/components/index/characters-table";
import { ExtractCharactersButton } from "@/components/index/extract-characters-button";
import { GenerateStoryButton } from "@/components/index/generate-story-button";
import { GenreSelector } from "@/components/index/genres";
import { SourceText } from "@/components/index/source-text";
import { Title } from "@/components/index/title";
import { ToneSelector } from "@/components/index/tones";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/ui/footer";

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
  const [tone, setTone] = useState("Happy");
  const [genre, setGenre] = useState("Fantasy");
  const [runningQuery, setRunningQuery] = useState(false);
  const [answer, setAnswer] = useState(emptyAnswer);
  const [generatingStory, setGeneratingStory] = useState(false);

  const handleGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handleTone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTone(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Storyteller</title>
      </Head>
      <Title />
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
            <div className="my-5 flex flex-col space-y-2">
              <Label htmlFor={answerId}>Characters in the story:</Label>
              <CharactersTable characters={answer.characters} />
            </div>
            <p className="mt-6 text-center text-lg leading-8 text-gray-100">
              Now, generate a new one defining genre and tone.
            </p>
            <GenreSelector selectedGenre={genre} onChange={handleGenre} />
            <ToneSelector selectedTone={tone} onChange={handleTone} />
            <GenerateStoryButton
              generatingStory={generatingStory}
              setGeneratingStory={setGeneratingStory}
            />
          </>
        )}
        <Footer />
      </main>
    </>
  );
}
