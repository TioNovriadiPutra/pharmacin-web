import PerawatanFirstForm from "components/fragments/PerawatanFirstForm";
import PropTypes from "prop-types";
import Bar from "components/elements/Bar";
import PerawatanSecondForm from "components/fragments/PerawatanSecondForm";
import PerawatanThirdForm from "components/fragments/PerawatanThirdForm";

const PerawatanAssessment = ({ control }) => {
  return (
    <div className="bg-white px-6 py-4.5 rounded-md ">
      <PerawatanFirstForm control={control} />

      <Bar styles="mx-0 bg-border" />

      <PerawatanSecondForm control={control} />

      <Bar styles="mx-0 bg-border" />

      <PerawatanThirdForm control={control} />
    </div>
  );
};

export default PerawatanAssessment;

PerawatanAssessment.propTypes = {
  control: PropTypes.any,
};
