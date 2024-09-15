const tones = [
  { emoji: "😊", value: "Happy" },
  { emoji: "😢", value: "Sad" },
  { emoji: "😏", value: "Sarcastic" },
  { emoji: "😂", value: "Funny" },
];

const ToneSelector = ({
  selectedTone,
  onChange,
}: {
  selectedTone: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mt-5 space-y-4 rounded-lg p-4">
      <h3 className="text-xl font-semibold text-center">Tone</h3>
      <div className="flex flex-wrap justify-center">
        {tones.map(({ value, emoji }) => (
          <div key={value} className="m-2 rounded-lg bg-gray-600 p-4">
            <input
              id={value}
              type="radio"
              name="tone"
              value={value}
              checked={selectedTone === value}
              onChange={onChange}
            />
            <label className="ml-2" htmlFor={value}>
              {`${emoji} ${value}`}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ToneSelector };
