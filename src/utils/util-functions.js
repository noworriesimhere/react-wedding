export const handleRefClick = (ref, mobileButton = false, setClick) => {
  return () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
    if(mobileButton) {
      setClick(false);
    }
  };
};
