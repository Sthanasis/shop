import { ReactNode } from 'react';

export default function ProductGrid({
  images,
  info,
  reviews,
}: {
  images: ReactNode;
  info: ReactNode;
  reviews: ReactNode;
}) {
  return (
    <section className="w-full h-full">
      <div className="max-w-[1000px] flex-col flex md:flex-row gap-8 mx-auto mb-8">
        <div className="md:w-1/2">{images}</div>
        <div className="md:w-1/2">{info}</div>
      </div>
      <div className="max-w-[1000px] flex-col flex md:flex-row gap-8 mx-auto">
        {reviews}
      </div>
    </section>
  );
}
