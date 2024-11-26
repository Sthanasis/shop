'use client';
import Image from 'next/image';
import { useState } from 'react';

interface ProductImagesListProps {
  images: {
    id: number;
    url: string;
  }[];
}

const ProductImageList = ({ images }: ProductImagesListProps) => {
  const [image, setImage] = useState(images[0]);

  return (
    <div className="flex-col flex md:flex-row gap-4 pt-8">
      <div className="flex md:flex-col gap-1">
        {images.map((img) => (
          <button
            className={[
              'border p-1 rounded-sm relative w-10 h-10',
              img.id === image.id ? 'border-dark-steel' : '',
            ].join(' ')}
            key={img.id}
            onClick={() => setImage(img)}
          >
            <Image
              alt="main image"
              src={img.url}
              fill
              style={{ objectFit: 'contain' }}
            />
          </button>
        ))}
      </div>

      <div className="border w-full h-full">
        <Image
          priority
          alt="main image"
          src={image.url}
          width={300}
          height={400}
          style={{ height: 'auto', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default ProductImageList;
