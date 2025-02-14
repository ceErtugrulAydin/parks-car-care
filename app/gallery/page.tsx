import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Before and after of a red car" },
  { src: "/images/gallery2.jpg", alt: "Interior detailing of a luxury car" },
  { src: "/images/gallery3.jpg", alt: "Exterior wash of a black SUV" },
  { src: "/images/gallery4.jpg", alt: "Waxing process on a blue sports car" },
  { src: "/images/gallery5.jpg", alt: "Tire and rim cleaning" },
  { src: "/images/gallery6.jpg", alt: "Full detailing of a white sedan" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Çalışmalarımız
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-square">
            {" "}
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
