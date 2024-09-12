import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "./icons";

interface Props {
  title: string;
  href?: string;
  badges?: readonly string[];
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: {
    sourceUrl: string;
    websiteUrl: string;
  };
  className?: string;
}

export function ProjectCard({
  title,
  href,
  badges,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2 pt-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base items-center justify-center font-semibold leading-none sm:text-sm">
            {title}
            {badges && (
              <span className="ml-2 inline-flex gap-x-1">
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs px-2"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </span>
            )}
          </CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.sourceUrl && (
              <Link href={links.sourceUrl} target="_blank">
                <Badge className="flex gap-1 px-2 py-1 text-[10px] rounded-md">
                  <Icons.Github className="w-4 h-4" />
                  Source
                </Badge>
              </Link>
            )}
            {links.websiteUrl && (
              <Link href={links.websiteUrl} target="_blank">
                <Badge className="flex gap-1 px-2 py-1 text-[10px] rounded-md">
                  <Icons.Globe className="w-4 h-4" />
                  Website
                </Badge>
              </Link>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
