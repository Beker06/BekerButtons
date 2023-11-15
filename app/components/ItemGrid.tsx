'use client';

interface ItemGridProps {
  html?: React.ReactElement;
}
  
  const ItemGrid: React.FC<ItemGridProps> = ({ html }) => {
    return (
      <div
        className="
            flex
            relative
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