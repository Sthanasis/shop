export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full rounded-full border bg-snow-white h-3 flex">
      <div
        className="bg-secondary rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
