const ClaudeRecipe = () => {
  return (
    <section>
      <h2>Szef kuchni proponuje:</h2>
      <article>
        <p>Oto przepis na pyszne danie!</p>
        <h3>Składniki:</h3>
        <ul className="list">
          <li>1 kg ziemniaków</li>
          <li>2 cebule</li>
          <li>400 g mięsa mielonego</li>
          <li>1 puszka pomidorów</li>
        </ul>
        <h3>Przygotowanie:</h3>
        <ol className="list">
          <li>Obierz i pokrój ziemniaki w kostkę.</li>
          <li>Pokrój cebulę w drobną kostkę.</li>
          <li>Na patelni podsmaż cebulę, a następnie dodaj mięso mielone.</li>
          <li>Dodaj pomidory i gotuj przez 20 minut.</li>
          <li>W osobnym garnku ugotuj ziemniaki do miękkości.</li>
          <li>Podawaj danie na ciepło.</li>
        </ol>
        <h3>Wskazówki:</h3>
        <ul className="list">
          <li>Możesz dodać ulubione przyprawy do smaku.</li>
          <li>Podawaj z sałatką lub surówką.</li>
        </ul>
        <h3>Smacznego!</h3>
        <p>Nie zapomnij podzielić się swoimi wrażeniami!</p>
        <p>Jeśli masz jakieś pytania, śmiało pytaj!</p>
        <p>Możesz również dodać inne składniki, które lubisz!</p>
        <p>Przepis można modyfikować według własnych upodobań!</p>
      </article>
    </section>
  );
};

export default ClaudeRecipe;
