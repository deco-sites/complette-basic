import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  siteName: string
  logo: LiveImage
}

export default function Header({ logo, siteName }: Props) {
  return (
    <div class="flex flex-row justify-between">
      <Image src={logo} width={325} height={114} />
      <h1 class="font-bold text-xl p-1">{siteName}</h1>
    </div>
  );
}
