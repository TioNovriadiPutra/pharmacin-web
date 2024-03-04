import { deleteIcon } from "assets/images";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import DropdownInput from "./DropdownInput";
import CurrInput from "./CurrInput";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";

const CartInputRow = ({ rowIndex, cartData, control, removeItem, setValue }) => {
  const drugId = useWatch({
    control,
    name: `${cartData.inputs[0].name}.${rowIndex}.drugId`,
  });

  const quantity = useWatch({
    control,
    name: `${cartData.inputs[0].name}.${rowIndex}.quantity`,
  });

  useEffect(() => {
    if (drugId !== null) {
      setValue(`${cartData.inputs[0].name}.${rowIndex}.purchasePrice`, drugId.extra);
    }
  }, [drugId]);

  useEffect(() => {
    if (quantity) {
      setValue(`${cartData.inputs[0].name}.${rowIndex}.totalPrice`, quantity * drugId.extra);
    } else {
      setValue(`${cartData.inputs[0].name}.${rowIndex}.totalPrice`, 0);
    }
  }, [quantity]);

  return (
    <div className="flex-row px-2 py-2 gap-3.5">
      {cartData.temp.inputs.map((item, index) => {
        if (item.type === "text" || item.type === "number" || item.type === "date") {
          return (
            <div key={index.toString()} className={`${index === 0 ? "flex-2" : "flex-1"}`}>
              <TextInput
                inputData={{
                  ...item,
                  name: `${cartData.inputs[0].name}.${rowIndex}.${item.name}`,
                  readOnly: drugId ? false : true,
                }}
                control={control}
              />
            </div>
          );
        } else if (item.type === "dropdown") {
          return (
            <div key={index.toString()} className={`${index === 0 ? "flex-2" : "flex-1"}`}>
              <DropdownInput
                inputData={{
                  ...item,
                  name: `${cartData.inputs[0].name}.${rowIndex}.${item.name}`,
                }}
                control={control}
              />
            </div>
          );
        } else if (item.type === "currency") {
          return (
            <div key={index.toString()} className={`${index === 0 ? "flex-2" : "flex-1"}`}>
              <CurrInput
                inputData={{
                  ...item,
                  name: `${cartData.inputs[0].name}.${rowIndex}.${item.name}`,
                }}
                control={control}
              />
            </div>
          );
        }
      })}

      <div className="flex-1 flex-row justify-center items-center">
        <button className="py-0" onClick={() => removeItem(rowIndex)}>
          <img src={deleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default CartInputRow;

CartInputRow.propTypes = {
  rowIndex: PropTypes.number,
  cartData: PropTypes.object,
  control: PropTypes.any,
  removeItem: PropTypes.func,
  setValue: PropTypes.any,
};
