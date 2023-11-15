'use client';

interface ContainerGridProps {
    children: React.ReactNode;
  }
  
  const ContainerGrid: React.FC<ContainerGridProps> = ({ children }) => {
    return (
      <div
        className="
          box-border 
          rounded-lg
          grid 
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
          bg-white 
          h-auto
          p-2
        "
      >
        {children}
      </div>
    );
  };
  
  export default ContainerGrid;