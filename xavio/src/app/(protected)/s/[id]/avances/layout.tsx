export default function AvanceLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode,
  params: { id: string }
}) {
  return (
      <div className="">
          <div className="">
              {children}
          </div>
      </div>
  )
}