export interface Props {
  title: string;
}

export default function Informations({ title }: Props) {
  return (
    <div class="bg-purple-500 w-full text-center p-2">
      <span class="text-white font-bold text-2xl">{title}</span>
    </div>
  );
}
