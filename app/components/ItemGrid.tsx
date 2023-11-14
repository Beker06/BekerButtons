'use client'

interface ItemGridProps {
    html: React.ReactNode;
  }
  
  const ItemGrid: React.FC<ItemGridProps> = ({ html }) => {
    return (
      <div
        className="
            flex 
            items-center 
            justify-center 
            bg-white 
            p-20 
            min-h-200 
            transition-transform 
            duration-200 
            ease-in-out 
            hover:scale-105
        "
      >
        {html}
      </div>
    );
  }
  
  export default ItemGrid;