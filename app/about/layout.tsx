export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="container mx-auto  pt-16 px-6 flex-grow">
        {children}
      </div>
    </section>
  );
}
