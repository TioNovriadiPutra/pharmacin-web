const ProfileSkeleton = () => {
  return (
    <div className="mx-3.25 flex-row items-center gap-5.5">
      <div className="bg-skeleton min-h-10.5 min-w-10.5 rounded-full" />

      <div className="gap-1 flex-1">
        <div className="bg-skeleton h-5 w-full" />
        <div className="bg-skeleton h-5 w-full" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
