export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 xl:px-20 mt-16 lg:mt-[117px]">
      {children}
    </div>
  )
}