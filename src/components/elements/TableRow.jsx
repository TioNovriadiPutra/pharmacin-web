import { deleteIcon, editIcon } from "assets/images";
import PropTypes from "prop-types";

const TableRow = ({ rowData }) => {
  return (
    <div
      className="flex-row gap-6 border-b border-table-border py-2.75 items-center"
      onClick={() => {
        if (rowData.onDetail) {
          rowData.onDetail(rowData.id);
        }
      }}
    >
      {rowData.data.map((item, index) => (
        <p key={index.toString()} className="flex-1 text-black my-1.75">
          {item}
        </p>
      ))}

      {rowData.withAction && (
        <div className="flex-1 flex-row justify-center items-center gap-2.5">
          {rowData.withAction.map((item, index) => (
            <button key={index.toString()} className="py-0" onClick={() => item.onClick(rowData.id)}>
              <img src={item.type === "delete" ? deleteIcon : item.type === "edit" ? editIcon : null} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableRow;

TableRow.propTypes = {
  rowData: PropTypes.object,
};
