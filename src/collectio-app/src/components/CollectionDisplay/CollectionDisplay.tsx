import { CollectionCard, CollectionMenu } from "@/components";
import './CollectionDisplay.css';

const CollectionDisplay = () => {
  const collections = Array(10).fill({ title: "My collection", description: "Lorem ipsum dorem itsum" });

  return (
    <div className="collections-section">
      <CollectionMenu />
      <h1 className="collections-section-header">My collections</h1>
      <div className="grid grid-cols-3 auto-cols-max auto-rows-max">
        {collections.map((item, index) => (
          <CollectionCard title={item.title} description={item.description} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDisplay;
