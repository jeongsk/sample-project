import Image from "next/image";
import {useEffect, useMemo, useCallback, useState} from "react";

export default function Home() {

  const [state, setState] = useState<any>('');

  const message = useMemo(() => {
    return "Hello, World!";
  }, []);

  const handleClick = useCallback(() => {
    setState(message);
  }, []);

  useEffect(() => {
    setState(''); // Reset state
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Welcome</button>
      {state && <h1 className="text-4xl">{state}</h1>}
    </main>
  );
}
