import ReactMarkdown from "react-markdown";
const ClaudeRecipe = (props) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Proponowany przepis:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
