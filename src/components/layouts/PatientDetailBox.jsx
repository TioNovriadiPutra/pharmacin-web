import React from "react";
import { patientHeader } from "constants/header";
import DetailBoxSection from "components/fragments/DetailBoxSection";

const PatientDetailBox = () => {
  return (
    <div className="bg-white px-6 py-4.5 rounded-md flex-row">
      <DetailBoxSection data={patientHeader.first} styles="flex-1" />

      <DetailBoxSection data={patientHeader.second} styles="flex-1" />
    </div>
  );
};

export default PatientDetailBox;
