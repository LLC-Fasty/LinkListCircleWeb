export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className="md:container mx-auto min-h-screen flex flex-col ">
        {children}
      </div>
    );
  }