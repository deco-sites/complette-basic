import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

interface Props {
  menuItems: MenuItems[];
}

interface MenuItems {
  text: string;
  type: string;
  icon?: LiveImage;
  href: string;
}

export default function NavItems(props: Props) {
  const { menuItems } = props;

  const defaultClasses =
    "text-white font-josefin  text-xs xl:text-base uppercase font-normal w-20 xl:w-full";
  const ctaClasses =
    "bg-white py-1 px-4 -mt-1 text-complette-purple font-josefin  text-xs xl:text-base uppercase font-normal rounded-lg";
  return (
    <div class="flex mt-8 justify-end mr-4">
      {menuItems.map((item, index) => {
        const { text, type, icon, href } = item;

        return (
          <div key={index} class="mr-9 whitespace-nowrap hover:cursor-pointer">
            <a href={href}>
              <div
                class={`flex ${
                  type === "default" ? defaultClasses : ctaClasses
                }`}
              >
                {icon && <div class="relative top-[3px]"><Image src={icon} width={18} height={18} alt="imagens contendo icones aleatorios" /></div>}
                <p class={`font-josefin ${type !== "default" ? 'ml-2' : ""}`}>{text}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
