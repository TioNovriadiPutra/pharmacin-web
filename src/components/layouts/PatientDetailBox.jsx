import React from "react";
import { patientHeader } from "constants/header";

const PatientDetailBox = () => {
  return (
    <div className="bg-white px-6 py-4.5 rounded-md flex-row">
      <div className="flex-1 gap-3">
        {patientHeader.first.map((item, index) => (
          <div key={index.toString()} className="flex-row">
            <h3 className="text-sub-title flex-1">{item.title}</h3>
            <h3 className="text-black flex-2">: {item.value}</h3>
          </div>
        ))}
      </div>

      <div className="flex-1">
        {patientHeader.second.map((item, index) => (
          <div key={index.toString()} className="flex-row">
            <h3 className="text-sub-title flex-1">{item.title}</h3>
            <h3 className="text-black flex-2">: {item.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDetailBox;
