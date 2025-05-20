import ReactMarkdown from "react-markdown";

const ClaudeRecipe = ({ recipe }) => {
  return (
    <section
      className="prose prose-base sm:prose-lg md:prose-xl dark:prose-invert mt-10 max-w-none rounded-xl bg-[#fefefe] px-4 py-6 shadow-md sm:px-6 md:px-10 dark:bg-[#1e1e2f]"
      aria-live="polite"
    >
      <h2 className="mb-6 text-center text-3xl font-extrabold text-[#dd6d48] sm:text-5xl dark:text-[#b68bff]">
        Proponowany przepis:
      </h2>
      <ReactMarkdown
        components={{
          h3: ({ ...props }) => (
            <h3
              className="mt-6 mb-2 text-center text-2xl font-semibold text-[#dd6d48] sm:text-5xl dark:text-[#a170f5]"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p
              className="text-md my-2 leading-relaxed text-gray-800 dark:text-gray-200"
              {...props}
            />
          ),
          ul: ({ ...props }) => (
            <ul
              className="list-inside list-disc space-y-1 text-[#212020] dark:text-gray-200"
              {...props}
            />
          ),
          li: ({ ...props }) => (
            <ul
              className="relative pl-2 before:absolute before:left-[-1rem] before:w-2 before:rounded-full before:bg-[#dd6d48] md:my-2 md:before:top-[0.5rem] md:before:h-2 dark:before:bg-[#9507ee]"
              {...props}
            />
          ),
          strong: ({ ...props }) => (
            <strong
              className="text-xl font-bold text-[#dd6d48] dark:text-[#b68bff]"
              {...props}
            />
          ),
        }}
      >
        {recipe}
      </ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
