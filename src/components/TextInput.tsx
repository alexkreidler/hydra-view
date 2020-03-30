import React from "react";

export function TextInput({
  onChange,
  value
}: {
  onChange: (val: string) => void;
  value: string;
}) {
  return (
    <input onChange={e => onChange(e.target.value)} type="text" value={value} />
  );
}
