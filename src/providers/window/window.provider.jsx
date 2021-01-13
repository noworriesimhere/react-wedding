import React, { createContext, useState, useEffect } from 'react';

export const CurrentWindowContext = createContext(null);

const CurrentWindowProvider = ({ children }) => {
  const [ref, setRef] = useState(null);
  const getStyles = (ref) => {
    let styles = ref && getComputedStyle(ref);
    return styles.marginTop;
  };
  const [headerMargin, setHeaderMargin] = useState(getStyles);

  useEffect(() => {
    setHeaderMargin(headerMargin);
  }, [headerMargin]);

  return (
    <CurrentWindowContext.Provider value={{ ref, setRef, getStyles }}>
      {children}
    </CurrentWindowContext.Provider>
  );
};

export default CurrentWindowProvider;
