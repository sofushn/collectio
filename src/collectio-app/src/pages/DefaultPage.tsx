import React from "react";
import "./DefaultPage.css";
import { Jumbotron, CollectionDisplay } from '@/components';

const DefaultPage: React.FC = () => {
  //

  return (
    <div id="root">
      {/* Jumbotron Section */}
      <Jumbotron title="Welcome to your collection!" description="Browse through your curated items and explore your favorites"/>

      {/* Collections Section */}
      <CollectionDisplay />
    </div>
  );
};

export default DefaultPage;
