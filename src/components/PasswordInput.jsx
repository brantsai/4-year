import { useRef, useState } from "react";

export default function PasswordInput({ onComplete }) {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (index, e) => {
    const val = e.target.value;
    if (!/^\d?$/.test(val)) return; // only allow 1 digit

    const newValues = [...values];
    newValues[index] = val;
    setValues(newValues);

    // move to next input if current is filled
    if (val && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // call onComplete if all filled
    if (newValues.every((v) => v !== "")) {
      onComplete(newValues.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex space-x-2 justify-center">
      {values.map((v, i) => (
        <div key={i} className="flex items-center">
          {i === 2 && (
            <span className="mx-1 mt-2 mr-2 text-black text-4xl">/</span>
          )}
          <input
            type="text"
            maxLength="1"
            value={v}
            ref={(el) => (inputsRef.current[i] = el)}
            onChange={(e) => handleChange(i, e)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-12 h-12 text-center rounded-lg bg-white border border-neutral-700 text-black text-2xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      ))}
    </div>
  );
}
