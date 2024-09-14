import React from "react";
import { Label } from "@/components/ui/label";
import { LinkedSlider } from "@/components/ui/linkedslider";

const Settings = ({
  chunkSize,
  setChunkSize,
  chunkOverlap,
  setChunkOverlap,
  setNeedsNewIndex,
}: {
  chunkSize: string;
  setChunkSize: (value: string) => void;
  chunkOverlap: string;
  setChunkOverlap: (value: string) => void;
  setNeedsNewIndex: (value: boolean) => void;
}) => {
  return (
    <div className="space-y-2">
      <Label>Settings:</Label>
      <div>
        <LinkedSlider
          label="Chunk Size:"
          description={
            "The maximum size of the chunks we are searching over, in tokens. " +
            "The bigger the chunk, the more likely that the information you are looking " +
            "for is in the chunk, but also the more likely that the chunk will contain " +
            "irrelevant information."
          }
          min={1}
          max={3000}
          step={1}
          value={chunkSize}
          onChange={(value: string) => {
            setChunkSize(value);
            setNeedsNewIndex(true);
          }}
        />
      </div>
      <div>
        <LinkedSlider
          label="Chunk Overlap:"
          description={
            "The maximum amount of overlap between chunks, in tokens. " +
            "Overlap helps ensure that sufficient contextual information is retained."
          }
          min={1}
          max={600}
          step={1}
          value={chunkOverlap}
          onChange={(value: string) => {
            setChunkOverlap(value);
            setNeedsNewIndex(true);
          }}
        />
      </div>
    </div>
  );
};

export { Settings };
