const Loader = (props) => {
  if (!props.isLoading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-xl dark:bg-[#1e1e2f]">
        <svg
          className="h-10 w-10 animate-spin text-[#dd6d48] dark:text-[#9507ee]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          role="status"
          aria-label="Ładowanie..."
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <p className="text-center font-semibold text-[#333] dark:text-gray-200">
          Generuję przepis...
        </p>
      </div>
    </div>
  );
};

export default Loader;
