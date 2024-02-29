import { deleteIcon } from "assets/images";
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
          <h3 key={index.toString()} className={`text-sub-title ${index === 0 ? "flex-2" : "flex-1"} ${item === "Tindakan" && "text-center"}`}>
            {item}
          </h3>
        ))}
      </div>

      <ScrollContainer>
        {fields.map((field, indexField) => (
          <div key={field.id} className="flex-row px-2 py-2 gap-3.5">
            {cartData.temp.inputs.map((item, index) => {
              if (item.type === "text" || item.type === "number" || item.type === "date") {
                return (
                  <div key={index.toString()} className={`${index === 0 ? "flex-2" : "flex-1"}`}>
                    <TextInput inputData={{ ...item, name: `${cartData.inputs[0].name}.${indexField}.${item.name}` }} control={control} />
                  </div>
                );
              } else if (item.type === "dropdown") {
                return (
                  <div key={index.toString()} className={`${index === 0 ? "flex-2" : "flex-1"}`}>
                    <DropdownInput inputData={{ ...item, name: `${cartData.inputs[0].name}.${indexField}.${item.name}` }} control={control} />
                  </div>
                );
              } else if (item.type === "currency") {
                return (
                  <div key={index.toString()} className={`${index === 0 ? "flex-2" : "flex-1"}`}>
                    <CurrInput inputData={{ ...item, name: `${cartData.inputs[0].name}.${indexField}.${item.name}` }} control={control} />
                  </div>
                );
              }
            })}

            <div className="flex-1 flex-row justify-center items-center">
              <button className="py-0" onClick={() => removeItem(indexField)}>
                <img src={deleteIcon} />
              </button>
            </div>
          </div>
        ))}
      </ScrollContainer>

      <SubmitButton buttonData={cartData.addButton} color={factoryId ? "bg-secondary" : "bg-inactive"} styles="px-11.5" onClick={addItem} disabled={factoryId ? false : true} />
    </div>
  );
};

export default CartInput;

CartInput.propTypes = {
  cartData: PropTypes.object,
  control: PropTypes.any,
};
