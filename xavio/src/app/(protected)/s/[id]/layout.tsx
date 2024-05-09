import { NavbarSession } from "./_components/navbar-session";

export default async function SessionLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    id: string,
  },
}>) {  
  return (
    <div>
        <div className="z-1000">
            <NavbarSession idUser={params.id} />
        </div>
        {children}
    </div>
            
  );
}
