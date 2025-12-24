import React from "react";
import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroPageProps = {
  backgroundSrc: string;
  backgroundAlt: string;
  breadcrumbs: BreadcrumbItem[];
  title: string;
};

const HeroPage: React.FC<HeroPageProps> = ({
  backgroundSrc,
  backgroundAlt,
  breadcrumbs,
  title,
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= HERO IMAGE ================= */}
      <div
        className="
          relative w-full
          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          lg:h-[420px]
        "
      >
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/40" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl flex flex-col gap-1.5 sm:gap-2 md:gap-2.5">
            {/* Breadcrumb */}
            <div className="text-white text-xs sm:text-sm">
              {breadcrumbs.map((bc, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                const sep = idx > 0 ? " / " : "";

                return (
                  <React.Fragment key={`${bc.label}-${idx}`}>
                    {sep}
                    {bc.href && !isLast ? (
                      <Link href={bc.href} className="font-semibold">
                        {bc.label}
                      </Link>
                    ) : (
                      <span className={bc.href ? "font-semibold" : ""}>
                        {bc.label}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Title */}
            <h1
              className="
                max-w-5xl text-white font-medium uppercase
                leading-snug
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-4xl
              "
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
