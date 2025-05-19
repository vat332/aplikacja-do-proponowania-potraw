import { InferenceClient } from "@huggingface/inference";
import process from "process";

const SYSTEM_PROMPT = `Jesteś asystentem, który otrzymuje listę składników od użytkownika i sugeruje przepis, który można przygotować z niektórych lub wszystkich tych składników. Nie musisz używać każdego składnika wymienionego przez użytkownika w przepisie. Przepis może zawierać dodatkowe składniki, których nie podano, ale postaraj się nie dodawać ich zbyt wiele. Sformatuj swoją odpowiedź w markdown, aby łatwiej było ją wyświetlić na stronie internetowej.`;

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN);

export async function getRecipe(ingredients) {
  const ingredientsString = ingredients.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "deepseek-ai/DeepSeek-V3-0324",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Podaj przepis na danie, które można przygotować z następujących składników: ${ingredientsString}.`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error(error.message);
  }
}
