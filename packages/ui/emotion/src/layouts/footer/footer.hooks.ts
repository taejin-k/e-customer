import { useState } from 'react';

export const useFooterService = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return {
    open,
    handleOpenToggle,
  };
};
