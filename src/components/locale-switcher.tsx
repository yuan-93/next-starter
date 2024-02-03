"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import { Button } from "./button";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p className="text-2xl font-bold">Locale switcher:</p>
      <ul className="flex flex-row w-12 gap-1">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Button as={Link} href={redirectedPathName(locale)}>
                {locale}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
