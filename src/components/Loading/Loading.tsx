import React, { useEffect, useState } from 'react';

import Spinner from './Spinner';

type Props = {
  showAfter?: number;
};

const Loading = ({ showAfter = 0 }: Props) => {
  const [visible, setVisibility] = useState(showAfter === 0);

  useEffect(() => {
    if (showAfter === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setVisibility(true);
    }, showAfter);

    return () => {
      clearTimeout(timer);
    };
  });

  if (!visible) {
    return null;
  }

  return <Spinner />;
};

export default Loading;
