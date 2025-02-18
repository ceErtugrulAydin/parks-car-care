import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Parks Car Care
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
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
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Rezervasyon yapın</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-black" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="hover:underline">
                  Ana Sayfa
                </Link>
                <Link href="/services" className="hover:underline">
                  Hizmetlerimiz
                </Link>
                <Link href="/gallery" className="hover:underline">
                  Galeri
                </Link>
                <Link href="/contact" className="hover:underline">
                  İletişim
                </Link>
                <Button asChild>
                  <Link href="/contact">Rezervasyon yapın</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
