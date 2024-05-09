import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: `Sesion`
  }
} 

export default async function SessionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <div>
        {children}
    </div>
  );
}
