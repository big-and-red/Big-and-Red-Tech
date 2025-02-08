import React from "react";

import QAModuleCard from "../components/QAModuleCard";
import { qaModules } from "../constants/modules/qa_modules";

const QAPage = () => {
  return (
    <div className="space-y-6">
      {qaModules.map((module, index) => (
        <QAModuleCard key={index} {...module} />
      ))}
    </div>
  );
};

export default QAPage;
