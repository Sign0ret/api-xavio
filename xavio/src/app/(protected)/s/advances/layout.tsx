export default function AvanceLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <div className="">
            <div className="">
                {children}
            </div>
        </div>
    )
  }