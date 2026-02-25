import Image from "next/image";
import Portada from '@/public/Portada.svg'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-default  font-sans bg-default">
      <Image src={Portada} alt="Logo you.gg" width={200} height={100}/>
    </div>
  );
}
