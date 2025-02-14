import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <ImageSlider />
      </section>
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Hoşgeldiniz</h1>
        <p className="text-lg md:text-xl mb-6">
          Aracınızın en iyi şekilde görünmesini sağlamak için profesyonel araç
          yıkama ve detaylandırma hizmetleri sunuyoruz.
        </p>
        <Button asChild size="lg">
          <Link href="/services">Hizmetlerimizi Keşfedin</Link>
        </Button>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Neden Bizi Seçmelisiniz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Uzman Bakımı</h3>
            <p>
              Profesyonellerden oluşan ekibimiz aracınızın en iyi tedaviyi
              almasını sağlar.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Kaliteli Ürünler</h3>
            <p>
              Tüm hizmetlerimizde yalnızca birinci sınıf, çevre dostu ürünler
              kullanıyoruz.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Memnuniyet Garantili</h3>
            <p>
              Memnuniyetiniz bizim önceliğimizdir. Siz mutlu olana kadar biz
              mutlu değiliz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
