import React from "react";
import "./DefaultPage.css";
import {Header, Jumbotron, CollectionCard} from '@/components';

const DefaultPage: React.FC = () => {
  const collections = Array(6).fill({ title: "DVD'er", image: "" });

  return (
    <div id="root">
      {/* Header */}
      <Header title="Collect.IO" description="For keeping track of your collections"/>

      {/* Jumbotron Section */}
      <Jumbotron title="Welcome to your collection!" description="Browse through your curated items and explore your favorites"/>

      {/* Collections Section */}
      <div className="grid grid-cols-3 auto-cols-max auto-rows-max">
        {collections.map((item, index) => (
          <CollectionCard title={item.title} description="TEST" key={index} />
        ))}
      </div>
    </div>
  );
};

export default DefaultPage;
