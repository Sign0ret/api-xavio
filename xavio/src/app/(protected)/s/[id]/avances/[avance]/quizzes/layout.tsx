export default function QuizAvanceLayout({
    children,
    params, // will be a page or nested layout
  }: {
    children: React.ReactNode,
    params: { 
        id: string,
        avance: string,
    }
  }) {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <div className="max-h-[400px]">
                {children}
            </div>
        </div>
    )
}