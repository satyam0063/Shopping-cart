export default function ParallelLayout({
  children,
  left,
  right,
}: Readonly<{
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div>{left}</div>
      <div>{right}</div>
    </>
  );
}
