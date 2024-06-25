export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <div id='resume' className='mx-auto'>
        {children}
      </div>
    </div>
  );
}