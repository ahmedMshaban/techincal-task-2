import { useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState("");

  const handleStatusChange = (status: string) => {
    setStatus(status);
  };

  return {
    status,
    handleStatusChange,
  };
};

export default useStatus;
