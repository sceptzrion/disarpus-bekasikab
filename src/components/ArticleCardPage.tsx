import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
}

export default function ArticleCard({
  image,
  date,
  title,
  excerpt,
  category,
  href,
}: ArticleCardProps) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* IMAGE */}
        <div className="relative h-64 md:h-auto">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* CONTENT */}
        <div className="md:col-span-2 p-6 flex flex-col gap-3">
          <span className="text-sm text-gray-500">{date}</span>

          <h2 className="font-semibold text-gray-800 text-lg leading-snug">
            {title}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>

          <div className="flex items-center justify-between mt-2">
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
              {category}
            </span>

            <Link
              href={href}
              className="text-sm text-[#1895A2] hover:underline"
            >
              Selengkapnya →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
