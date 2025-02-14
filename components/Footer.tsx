import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Parks Car Care</h3>
            <p>Profesyonel araç kaplama ve detaylı temizlik</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Hızlı Linklerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:underline">
                  Randevu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Bize Ulaşın</h3>
            <p>Balgat, Mevlana Blv. No:28, 06560 Çankaya/Ankara</p>
            <p>Phone: +90 541 554 13 14</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Parks Car Care. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
