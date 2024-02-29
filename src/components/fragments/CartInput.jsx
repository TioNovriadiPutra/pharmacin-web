import { deleteIcon } from "assets/images";
import CartInputRow from "components/elements/CartInputRow";
import CurrInput from "components/elements/CurrInput";
import DropdownInput from "components/elements/DropdownInput";
import SubmitButton from "components/elements/SubmitButton";
import TextInput from "components/elements/TextInput";
import ScrollContainer from "containers/ScrollContainer";
import PropTypes from "prop-types";
import { useFieldArray, useWatch } from "react-hook-form";

const CartInput = ({ cartData, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: cartData.inputs[0].name,
  });

  const factoryId = useWatch({
    control,
    name: "factoryId",
  });

  const addItem = () => {
    append(cartData.defaultTemp);
  };

  const removeItem = (index) => {
    remove(index);
  };

  return (
    <div className="flex-1">
      <div className="flex-row bg-main-background px-2 py-4.25 rounded-md gap-3.5">
        {cartData.header.map((item, index) => (
          <h3
            key={index.toString()}
            className={`text-sub-title ${index === 0 ? "flex-2" : "flex-1"} ${
              item === "Tindakan" && "text-center"
            }`}
          >
            {item}
          </h3>
        ))}
      </div>

      <ScrollContainer>
        {fields.map((field, index) => (
          <CartInputRow
            key={field.id}
            rowIndex={index}
            cartData={cartData}
            control={control}
            removeItem={removeItem}
          />
        ))}
      </ScrollContainer>

      <SubmitButton
        buttonData={cartData.addButton}
        color={factoryId ? "bg-secondary" : "bg-inactive"}
        styles="px-11.5"
        onClick={addItem}
        disabled={factoryId ? false : true}
      />
    </div>
  );
};

export default CartInput;

CartInput.propTypes = {
  cartData: PropTypes.object,
  control: PropTypes.any,
};
