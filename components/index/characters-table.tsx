import { Character } from "@/pages";

const CharactersTable = ({ characters }: { characters: Character[] }) => {
  return (
    <table className="min-w-full divide-y divide-gray-700 my-5">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
          >
            Character
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
          >
            Description
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
          >
            Personality
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {characters.map((item: Character, index: number) => (
          <tr key={index}>
            <td className="py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
              {item.character}
            </td>
            <td className="px-3 py-4 text-sm text-gray-300">
              {item.description}
            </td>
            <td className="px-3 py-4 text-sm text-gray-300">
              {item.personality}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { CharactersTable };
