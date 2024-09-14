import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";

const SourceText = ({
  sourceId,
  text,
  setText,
  setNeedsNewIndex,
}: {
  sourceId: string;
  text: string;
  setText: (text: string) => void;
  setNeedsNewIndex: (needsNewIndex: boolean) => void;
}) => {
  return (
    <div className="my-2 flex h-3/4 flex-auto flex-col space-y-2">
      <Label htmlFor={sourceId}>Source text:</Label>
      <Textarea
        id={sourceId}
        value={text}
        className="flex-1"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setText(e.target.value);
          setNeedsNewIndex(true);
        }}
      />
    </div>
  );
};
export { SourceText };
