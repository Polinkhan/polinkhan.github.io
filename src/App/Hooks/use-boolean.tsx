import { useState } from "react";

const useBoolean = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onToggle = () => setOpen((prev) => !prev);

  return { open, onOpen, onToggle, onClose };
};

export default useBoolean;
