// src/components/WhatsappButton.tsx
import Image from "next/image";
import Link from "next/link";

export default function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/523121457789?text=Hola, estoy interesado en obtener más información sobre sus servicios.."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Image
        src="/assets/whatsapp.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="drop-shadow-lg hover:scale-105 transition-transform"
      />
    </Link>
  );
}
