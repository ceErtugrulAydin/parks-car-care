import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Bize Ulaşın</h1>
      <span className="text-lg">
        Numaramızı arayarak rezervasyon yapabilir ve bilgi alabilirsiniz.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <br></br>
          <h2 className="text-2xl font-semibold mb-4">Konumumuz</h2>
          <p></p>
          <br></br>
          <div className="bg-gray-200 h-48 md:h-64 mb-4 rounded-lg">
            {" "}
            {/* Replace this div with an actual map or static image */}
            <div className="h-full flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.096969921123!2d32.82310587592155!3d39.939220571520366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34edca6e2882d%3A0xd7b241a334794d50!2sParks%20Car%20Care!5e0!3m2!1str!2str!4v1738656658432!5m2!1str!2str"
                width="750"
                height="260"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <p></p>
          <br></br>
          <div className="space-y-2">
            <p className="flex items-center">
              <MapPin className="mr-2 flex-shrink-0" />
              <span>Balgat, Mevlana Blv. No:28, 06560 Çankaya/Ankara</span>
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 flex-shrink-0" />
              <span>+90 541 554 13 14</span>
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 flex-shrink-0" />
              <span>info@parkscarcare.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
