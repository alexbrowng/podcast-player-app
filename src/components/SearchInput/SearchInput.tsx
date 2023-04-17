import { ChangeEvent, useCallback } from 'react';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <div>
      <input
        type="text"
        className="rounded border border-neutral-200 px-3 py-2 placeholder:text-neutral-400"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}
