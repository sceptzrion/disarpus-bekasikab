import Image from "next/image";

type QuickAccessCardProps = {
  title: string;
  subtitle: string;
};

export default function QuickAccessCard({
  title,
  subtitle,
}: QuickAccessCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-72 w-full">
        <Image
          src="/logo_disarpus.png"
          alt={title}
          fill
          className="object-contain p-6"
          priority
        />
      </div>

      {/* Text */}
      <div className="px-6 pb-6 text-center">
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-base text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
