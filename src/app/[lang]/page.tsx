import Image from "next/image";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Counter from "@/components/counter";
import LocaleSwitcher from "@/components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="w-full min-h-screen grid grid-cols-12">
      <div className="col-span-6 relative sm:block hidden">
        <Image
          src={"/pexels-eberhard-grossgasteiger-2437291.jpg"}
          alt="Cabin and Mountain"
          sizes="(min-width: 768px) 50vw, 0vw"
          fill
          className="object-cover max-w-full h-auto"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 bg-neutral-100 px-8 py-4 flex flex-col gap-2">
        <LocaleSwitcher />
        <p className=" text-xl">Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{" "}
          {dictionary["server-component"].welcome}
        </p>
        <Counter dictionary={dictionary.counter} />
      </div>
    </div>
  );
}
