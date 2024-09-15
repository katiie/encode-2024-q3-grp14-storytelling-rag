const StoryField = ({ messages }: { messages: { content: string }[] }) => {
  return (
    <div
      hidden={
        messages.length === 0 ||
        messages[messages.length - 1]?.content.startsWith("Generate")
      }
      className="my-10 rounded-lg bg-gray-700 p-4"
    >
      {messages[messages.length - 1]?.content}
    </div>
  );
};

export { StoryField };
