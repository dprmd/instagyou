export default function Avatar({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <div className={`overflow-hidden rounded-full ${className}`}>
      <img src={src} className="w-full" />
    </div>
  );
}
