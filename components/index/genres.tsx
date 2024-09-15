import React from "react";

const genres = [
  { emoji: "🧙", value: "Fantasy" },
  { emoji: "🕵️", value: "Mystery" },
  { emoji: "💑", value: "Romance" },
  { emoji: "🚀", value: "Sci-Fi" },
];

const GenreSelector = ({
  selectedGenre,
  onChange,
}: {
  selectedGenre: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mt-5 space-y-4 rounded-lg p-4">
      <h3 className="text-xl font-semibold text-center">Genre</h3>
      <div className="flex flex-wrap justify-center">
        {genres.map(({ value, emoji }) => (
          <div key={value} className="m-2 rounded-lg bg-gray-600 p-4">
            <input
              id={value}
              type="radio"
              value={value}
              name="genre"
              checked={selectedGenre === value}
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

export { GenreSelector };
