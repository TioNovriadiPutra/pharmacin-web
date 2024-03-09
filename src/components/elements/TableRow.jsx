import { deleteIcon, editIcon, infoIcon } from "assets/images";
import PropTypes from "prop-types";
import SubmitButton from "./SubmitButton";

const TableRow = ({ rowData }) => {
  return (
    <div
      className={`flex-row gap-6 border-b border-table-border py-2.75 items-center ${
        rowData.onDetail && "cursor-pointer"
      }`}
      onClick={() => {
        if (rowData.onDetail) {
          rowData.onDetail(rowData.id);
        }
      }}
    >
      {rowData.data.map((item, index) => (
        <p key={index.toString()} className="flex-1 text-black my-1.75">
          {item === null ? "-" : item}
        </p>
      ))}

      {rowData.withStatus && (
        <div className="flex-1 justify-center items-center">
          <div
            className={`${rowData.withStatus.color} py-1.75 px-2 rounded-xs`}
          >
            <p className={`${rowData.withStatus.textColor}`}>
              {rowData.withStatus.label}
            </p>
          </div>
        </div>
      )}

      {rowData.withAction && (
        <div className="flex-1 flex-row justify-center items-center gap-2.5">
          {rowData.withAction.map((item, index) => {
            if (item.type === "button") {
              return (
                <SubmitButton
                  key={index.toString()}
                  buttonData={item}
                  styles="py-1.5 px-3"
                  color={item.color}
                  onClick={item.onClick}
                  disabled={item.disabled}
                />
              );
            }

            return (
              <button
                key={index.toString()}
                className="py-0"
                onClick={(e) => {
                  e.stopPropagation();
                  item.onClick(rowData.id);
                }}
              >
                <img
                  src={
                    item.type === "delete"
                      ? deleteIcon
                      : item.type === "edit"
                      ? editIcon
                      : item.type === "info"
                      ? infoIcon
                      : null
                  }
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TableRow;

TableRow.propTypes = {
  rowData: PropTypes.object,
};
