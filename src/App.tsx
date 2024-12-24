import { useRandom } from "./hooks/useRandom";

import "./App.css";

const App = () => {
  const query = useRandom();

  return (
    <>
      {query.isLoading ? <h1>Cargando...</h1> : <h1>Numero: {query.data}</h1>}
      <div>{JSON.stringify(query.error)}</div>

      <button disabled={query.isFetching} onClick={() => query.refetch}>
        Nuevo Numero
      </button>
    </>
  );
};

export default App;
