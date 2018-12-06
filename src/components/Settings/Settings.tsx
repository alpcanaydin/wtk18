import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import Pane from './Pane';
import Gear from './Gear';

interface Props {
  children: ReactNode;
}

const Settings = ({ children }: Props) => {
  const [isOpen, setVisibility] = useState(false);

  if (isOpen) {
    return createPortal(
      <Pane
        onCloseClick={() => {
          setVisibility(false);
        }}
      >
        {children}
      </Pane>,
      document.body,
    );
  }

  return createPortal(
    <Gear
      onClick={() => {
        setVisibility(true);
      }}
    />,
    document.body,
  );
};

export default Settings;
