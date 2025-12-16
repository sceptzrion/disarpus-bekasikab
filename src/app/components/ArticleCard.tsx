import Image from "next/image";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  views: string;
};

export default function ArticleCard({
  title,
  excerpt,
  views,
}: ArticleCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
      {/* Thumbnail */}
      <div className="relative h-40 w-full">
        <Image
          src="/berita1.jpeg"
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-gray-800">{title}</h3>

        {/* Views */}
        <div className="mb-2 flex items-center gap-1 text-sm text-gray-500">
          <Image src="/eye_article.png" alt="views" width={16} height={16} />
          <span>{views}</span>
        </div>

        <p className="mb-4 text-sm text-gray-600 text-justify">{excerpt}</p>

        <button className="rounded-md bg-[#F26924] px-4 py-1.5 text-sm text-white hover:bg-[#DE6F37]">
          Selengkapnya
        </button>
      </div>
    </div>
  );
}
