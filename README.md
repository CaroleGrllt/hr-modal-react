# @carole-rg/hr-modal-react

A simple modal component for React.

## Installation

```bash
npm install @carole-rg/hr-modal-react
# ou
yarn add @carole-rg/hr-modal-react
```

## Prérequis

- Node.js >= 20.19.4
- npm ou yarn

## Utilisation

```jsx
import React, { useState } from 'react';
import { Modal } from '@carole-rg/hr-modal-react';
import '@carole-rg/hr-modal-react/styles.css';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        message="This is a modal"
        closeBtn="Close"
      />
    </div>
  );
}
```

## Props

- `isOpen` *(boolean)* — Displays the modal if `true`. Default: `false`.
- `onClose` *(function)* — Callback when the modal is closed.
- `message` *(String)* — Contents of the modal body.
- `closeBtn` *(String)* — Label of the close button.

## Licence

MIT