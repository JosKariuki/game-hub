import React, { ReactNode } from "react";

interface AlertsProps {
  children: ReactNode;
}

const Alerts = ({ children }: AlertsProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alerts;
