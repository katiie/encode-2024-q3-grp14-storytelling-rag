import { LinkedSlider } from "@/components/ui/linkedslider";

const ContextSettings = ({
  topK,
  setTopK,
  temperature,
  setTemperature,
  topP,
  setTopP,
}: {
  topK: string;
  setTopK: (topK: string) => void;
  temperature: string;
  setTemperature: (temperature: string) => void;
  topP: string;
  setTopP: (topP: string) => void;
}) => {
  return (
    <>
      <LinkedSlider
        className="my-2"
        label="Top K:"
        description={
          "The maximum number of chunks to return from the search. " +
          "It's called Top K because we are retrieving the K nearest neighbors of the query."
        }
        min={1}
        max={15}
        step={1}
        value={topK}
        onChange={(value: string) => {
          setTopK(value);
        }}
      />
      <LinkedSlider
        className="my-2"
        label="Temperature:"
        description={
          "Temperature controls the variability of model response. Adjust it " +
          "downwards to get more consistent responses, and upwards to get more diversity."
        }
        min={0}
        max={1}
        step={0.01}
        value={temperature}
        onChange={(value: string) => {
          setTemperature(value);
        }}
      />
      ;
      <LinkedSlider
        className="my-2"
        label="Top P:"
        description={
          "Top P is another way to control the variability of the model " +
          "response. It filters out low probability options for the model. It's " +
          "recommended by OpenAI to set temperature to 1 if you're adjusting " +
          "the top P."
        }
        min={0}
        max={1}
        step={0.01}
        value={topP}
        onChange={(value: string) => {
          setTopP(value);
        }}
      />
    </>
  );
};

export { ContextSettings };
