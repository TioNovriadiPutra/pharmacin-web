const TableSkeleton = () => {
  return (
    <div className="flex-1 gap-3.5">
      <div className="bg-skeleton rounded-md h-13" />

      <div className="flex-1 bg-skeleton rounded-md" />
    </div>
  );
};

export default TableSkeleton;
