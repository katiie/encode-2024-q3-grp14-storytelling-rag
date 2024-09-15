import { Label } from "@/components/ui/label";
import { FileCheck } from "lucide-react";
import { ChangeEvent, useState } from "react";

const SourceText = ({
  sourceId,
  setText,
  setNeedsNewIndex,
}: {
  sourceId: string;
  text: string;
  setText: (text: string) => void;
  setNeedsNewIndex: (needsNewIndex: boolean) => void;
}) => {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        setText(event.target?.result as string);
        setNeedsNewIndex(true);
        setIsUploaded(true);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="my-2 space-y-2">
      <Label htmlFor={sourceId}>Load text for extracting characters:</Label>
      <div className="flex items-center justify-between">
        <input
          type="file"
          id={sourceId}
          accept=".txt"
          onChange={handleFileChange}
        />
        {isUploaded && <FileCheck />}
      </div>
    </div>
  );
};

export { SourceText };
