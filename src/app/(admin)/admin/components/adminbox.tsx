
export default function Adminbox({ children }: { children: React.ReactNode }) {
    return (
      <div className="md:container mx-auto min-h-screen flex flex-col p-4 md:pl-64 ">
        {children}
      </div>
    );
  }