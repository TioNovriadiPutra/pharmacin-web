import React from "react";

const PerawatanSkeleton = () => {
  return (
    <div className="flex-1 gap-3.5">
      <div className="h-50 rounded-md bg-skeleton" />

      <div className="flex-row gap-3.5">
        <div className="bg-skeleton rounded-md h-11 flex-1" />
        <div className="bg-skeleton rounded-md h-11 flex-1" />
        <div className="bg-skeleton rounded-md h-11 flex-1" />
        <div className="bg-skeleton rounded-md h-11 flex-1" />
      </div>

      <div className="flex-1 bg-skeleton rounded-md" />
    </div>
  );
};

export default PerawatanSkeleton;
