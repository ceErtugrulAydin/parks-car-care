import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Temel Yıkama",
    description: "Dış yıkama, lastik temizleme ve temel iç süpürme.",
    price: 19.99,
  },
  {
    title: "Deluxe Yıkama",
    description: "Temel yıkama + iç detaylandırma ve cila uygulaması.",
    price: 39.99,
  },
  {
    title: "Premium Yıkama",
    description: "Showroom kaplaması için kapsamlı iç ve dış detaylar.",
    price: 89.99,
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Hizmetlerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
