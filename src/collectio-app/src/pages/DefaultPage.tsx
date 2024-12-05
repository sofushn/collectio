import React from "react";
import "./DefaultPage.css";
import {Header, Jumbotron, CollectionDisplay} from '@/components';

const DefaultPage: React.FC = () => {
  //

  return (
    <div id="root">
      {/* Header */}
      <Header title="Collect.IO" description="For keeping track of your collections"/>

      {/* Jumbotron Section */}
      <Jumbotron title="Welcome to your collection!" description="Browse through your curated items and explore your favorites"/>

      {/* Collections Section */}
      <CollectionDisplay />
    </div>
  );
};

export default DefaultPage;
