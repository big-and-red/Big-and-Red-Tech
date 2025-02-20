import React from "react";
import QAModuleCard from "../components/QAModuleCard";
import { qaModules, middleQaModules } from "../constants/modules";

const QAPage = ({ activeLevel }) => {
  const currentModules = activeLevel === 'junior' ? qaModules : middleQaModules;

  return (
    <div className="space-y-6">
      {currentModules.map((module, index) => (
        <QAModuleCard key={index} {...module} />
      ))}
    </div>
  );
};

export default QAPage;