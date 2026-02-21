import { useState } from 'react';
import Login from './components/login';
import { api, type Candidate } from './services/api';

function App() {
  //datos del candidato una vez que el login sea exitoso
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  //ejecuta cuando el Login termina todo su proceso
  const handleLoginSuccess = (data: Candidate) => {
    setCandidate(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">Nimble Gravity Challenge</h1>
      </header>

      <main className="w-full max-w-3xl">
        {/* Renderizado condicional: Si no hay candidato, mostramos el Login */}
        {!candidate ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          /*si hay candidato, mostramos sus datos temporalmente para verificar*/
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold text-green-600 mb-4 text-center">
              ¡Datos obtenidos con éxito!
            </h2>
            <p className="text-gray-600 mb-2 text-center">
              Estos son los datos que usaremos para postularte:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto text-gray-800">
              {JSON.stringify(candidate, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;