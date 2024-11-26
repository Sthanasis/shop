export default function ProductReviewStars({
  totalPercentage,
}: {
  totalPercentage: number;
}) {
  return (
    <div className="flex bg-[url(/empty_star.svg)] bg-[0%_50%] bg-repeat-x bg-[length:20px] h-full w-[100px]">
      <div
        className="bg-[url(/filled_star.svg)] h-full"
        style={{
          width: `${totalPercentage}%`,
          backgroundSize: 'inherit',
          backgroundRepeat: 'inherit',
          backgroundPosition: 'inherit',
        }}
      />
    </div>
  );
}
