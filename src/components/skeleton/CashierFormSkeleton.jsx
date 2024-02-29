const CashierFormSkeleton = () => {
  return (
    <div className="flex-1">
      <div className="flex-row gap-3.5 h-46">
        <div className="bg-skeleton rounded-md flex-1" />
        <div className="bg-skeleton rounded-md flex-2" />
      </div>
    </div>
  );
};

export default CashierFormSkeleton;
