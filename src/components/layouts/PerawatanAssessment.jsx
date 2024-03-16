import PerawatanFirstForm from "components/fragments/PerawatanFirstForm";
import React from "react";
import PropTypes from "prop-types";
import Bar from "components/elements/Bar";

const PerawatanAssessment = ({ control }) => {
  return (
    <div className="bg-white px-6 py-4.5 rounded-md ">
      <PerawatanFirstForm control={control} />

      <Bar styles="mx-0 bg-border" />
    </div>
  );
};

export default PerawatanAssessment;

PerawatanAssessment.propTypes = {
  control: PropTypes.any,
};
