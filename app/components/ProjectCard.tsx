"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <Link href={link} className="project-card">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        loading="lazy"
        className="object-cover w-full h-80"
      />
      <div className="p-5">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </Link>
  );
}
