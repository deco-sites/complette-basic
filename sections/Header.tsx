import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { useState } from "preact/hooks";
import NavItems from "$start/components/NavItems.tsx";


export interface Props {
  logo: LiveImage;
  minimumLogo: LiveImage;
  menuItems: Array<MenuItems>;
}

export interface MenuItems {
  text: string;
  type: string;
  icon?: LiveImage;
  href: string;
}

export default function Header(props: Props) {
  const { logo, minimumLogo, menuItems } = props;  

  return (

    <div class="flex bg-complette-purple">
      <div class="flex justify-start lg:w-4/12">
        <div class="relative lg:hidden sm:hidden">
            <Image src={minimumLogo} width={92} height={92} alt="logo da complette contendo um C com um + no meio" />
        </div>
        <div class="lg:flex hidden">
          <div class="flex">
            <div class="duration-200">
              <Image src={minimumLogo} width={76} height={76} alt="logo da complette contendo um C com um + no meio" />
            </div>
            <div class={`duration-300 ease-out opacity-0 hover:opacity-100 mt-3 -ml-[1.2rem]`}>
              <Image src={logo} width={176} height={55} alt="logo da complette" />
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex 2xl:w-8/12 w-10/12 justify-end hidden">
        <NavItems menuItems={menuItems} />
      </div>
    </div>
  );
}
