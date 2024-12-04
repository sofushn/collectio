import React from "react";
import "./DefaultPage.css";
import Header from "../components/Header";
import CollectionCard from "@/components/CollectionCard";

const DefaultPage: React.FC = () => {
  const collections = Array(6).fill({ title: "DVD'er", image: "" });

  return (
    <div id="root">
      {/* Header */}
      <Header
        title="Home"
        subtitle="My collections"
        description="Overview of my collections"
      />

      {/* Jumbotron Section */}
      <div className="jumbotron">
        <h2 className="jumbotron-title">Welcome to Your Collection!</h2>
        <p className="jumbotron-text">
          Browse through your curated items and explore your favorites.
        </p>
      </div>

      {/* Collections Section */}
        <div className="grid grid-cols-3 auto-cols-max auto-rows-max">
          {collections.map((item, index) => (
              <CollectionCard title={item.title} description="TEST" key={index}/>
          ))}
        </div>
    </div>
  );
};

export default DefaultPage;
