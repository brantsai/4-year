import { useState } from 'react';
import PasswordInput from './PasswordInput';

const PASSWORD = 1226;

const Landing = ({ onUnlock }) => {
  const [error, setError] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-3x1 font-bold">
          happy 4th anniversary! :)
        </h1>

        <p className="text-400">
          enter the password to unlock:
        </p>

        <PasswordInput
          onComplete={(code) => {
            if (Number(code) === PASSWORD) {
              onUnlock();
            } else {
              setError(true);
            }
          }}
        />

        {error && (
          <p className="text-sm font-bold text-red-700">
            what the heck u got it wrong :(
          </p>
        )}
      </div>
    </div>
  )
}

export default Landing