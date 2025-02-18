import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Komple Ultra Şeffaf Boya Koruma Film",
    description:
      "Aracınızın boyasını çiziklere, taş çarpmasına ve UV ışınlarına karşı korumak için tamamen şeffaf, dayanıklı koruma filmi uygulaması.",
  },
  {
    title: "Araç Renk Değişimi",
    description:
      "Profesyonel boya uygulaması ile aracınızın istediğiniz renge dönüşümünü sağlar. Detaylı yüzey hazırlığı ve yüksek kaliteli boya işlemleriyle yeni bir görünüm kazandırılır.",
  },
  {
    title: "Cam Film Uygulama",
    description:
      "Aracınızın camlarına özel film uygulaması ile ısı, UV ışınlarına karşı koruma ve güvenlik avantajı sunar. Profesyonel montaj garantilidir.",
  },
  {
    title: "Boya Koruma",
    description:
      "Özel bakım ürünleri ile aracınızın orijinal boyasını dış etkenlere, çiziklere ve kimyasal maddelere karşı uzun süre korur.",
  },
  {
    title: "Seramik Kaplama",
    description:
      "Aracınıza uzun süreli parlaklık ve dayanıklılık kazandıran, çiziklere, kimyasallara ve UV ışınlarına karşı üstün koruma sağlayan seramik kaplama uygulaması.",
  },
  {
    title: "PPF Seramik Koruma",
    description:
      "Yüksek teknoloji PPF filmi ve seramik kaplamanın birleşimi ile aracınızın boyasını maksimum koruma altına alır; çizik, taş çarpması ve dış etkenlere karşı ideal çözümdür.",
  },
  {
    title: "İç Detaylı Temizlik",
    description:
      "Aracınızın iç mekanında derinlemesine temizlik: Koltuk, döşeme, konsol ve diğer yüzeylerde toz, kir ve lekelerin giderilmesi için profesyonel hizmet.",
  },
  {
    title: "Motor Koruma",
    description:
      "Motor bölümünüzün temizliği ve özel koruyucu işlemleriyle, ısıl etkiler ve kirleticilere karşı motorunuzun performansını artırmayı hedefler.",
  },
  {
    title: "Deri ve Trim Bakımı",
    description:
      "Aracınızın iç mekanındaki deri ve plastik trim yüzeylere özel bakım. Temizlik, besleme ve koruyucu uygulamalarla ömrünü uzatır.",
  },
  {
    title: "Araç Kumaş Koruma",
    description:
      "Kumaş döşemelerde oluşabilecek lekeler ve aşınmalara karşı koruyucu uygulama. Uzun süre temiz ve yeni görünüm sağlar.",
  },
  {
    title: "Boyasız Göçük Onarım",
    description:
      "Aracınızdaki küçük göçükleri orijinal boya dokusuna zarar vermeden, profesyonel tekniklerle düzelten hızlı ve etkili onarım hizmeti.",
  },
  {
    title: "Boyasız Çizik ve Taş İzi Onarım",
    description:
      "Küçük çizik ve taş izlerini, boyaya müdahale etmeden onaran, aracınızın estetiğini geri kazandıran profesyonel uygulama.",
  },
  {
    title: "Mini Boya Uygulamaları",
    description:
      "Küçük boya dokunuşları gereken bölgelerde, orijinal renk uyumunu koruyarak profesyonel rötuş ve tamir işlemleri yapılır.",
  },
  {
    title: "İç Trim Restarosyon",
    description:
      "Aracınızın iç trimlerinde meydana gelen aşınma ve hasarları gideren, yeniden yenileyerek orijinal görünüme kavuşturan detaylı restorasyon hizmeti.",
  },
  {
    title: "Tuş Takımı Yenileme",
    description:
      "Aracınızın iç kontrol paneli ve tuş takımlarında oluşan aşınmaları gideren, fonksiyonellik ve estetiği yeniden kazandıran yenileme işlemleri.",
  },
  {
    title: "Bölgesel Deri Kumaş Yenileme",
    description:
      "Belirli bölgelerdeki deri ve kumaş döşemeleri, özel onarım ve yenileme işlemleri ile ilk günkü görünümüne kavuşturulur.",
  },
  {
    title: "Komple Araç Yenileme",
    description:
      "Aracınızın iç ve dış tüm detaylarında kapsamlı yenileme işlemleri; temizlik, boyama, detaylandırma ve onarım adımlarıyla adeta yeni bir araç görünümü sunar.",
  },
  {
    title: "Süngerli Araç Yıkama",
    description:
      "Yumuşak sünger kullanımı ile aracınızın dış yüzeyindeki kir, toz ve lekeleri nazikçe temizler. Boya yüzeyine zarar vermeden parlaklık kazandırır.",
  },
  {
    title: "Cilalı Araç Yıkama",
    description:
      "Özel cilalama ürünleri ile aracınızın yıkaması sırasında ekstra parlaklık ve koruma sağlanır. Yüzeyin ışıltısı ve dayanıklılığı artırılır.",
  },
  {
    title: "Vip Oto Yıkama",
    description:
      "Özel detaylı temizlik, bakım ve parlatma işlemleriyle aracınıza lüks bir dokunuş katan, üstün hijyen ve bakım standartlarına sahip VIP oto yıkama hizmeti.",
  },
  {
    title: "Aracınıza Dair Her şey",
    description:
      "Aracınızın tüm bakım, onarım ve estetik ihtiyaçlarına yönelik kapsamlı çözümler. Size özel danışmanlık ve hizmetlerle aracınızın her gereksinimi karşılanır.",
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
      <br />
      <Button asChild size="lg" className="mx-auto">
        <Link href="/contact">Şimdi Rezervasyon Yapın</Link>
      </Button>
    </div>
  );
}
