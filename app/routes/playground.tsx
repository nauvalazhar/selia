import * as React from 'react';
import * as ALL_EXAMPLES from 'components/examples';

export default function ExampleCommandPalette() {
  return (
    <div className="w-4/12 mx-auto">
      {Object.entries(ALL_EXAMPLES).map(([key, value]) => (
        <div key={key} className="mb-10">
          <h2 className="text-2xl font-bold">{key}</h2>
          {Object.entries(value).map(([key, child]) => (
            <div key={key} className="mb-10">
              <h3 className="text-xl font-bold">{child.name}</h3>
              <div className="flex items-center justify-center flex-wrap gap-x-2.5 gap-y-4 w-full">
                <child.component />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
