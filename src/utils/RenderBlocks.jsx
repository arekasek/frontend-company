import React from "react";
import TwoColumn from "@/blocks/BlogPost";
import PricingBlock from "@/blocks/PricingBlock";
import PauseBlock from "@/blocks/PauseBlock";
import Show from "@/blocks/Show";
import Gallery from "@/blocks/Gallery";

const RenderBlocks = ({ layout }) => {
  if (!layout || !Array.isArray(layout)) {
    return null;
  }

  return (
    <div>
      {layout.map((block, i) => {
        switch (block.blockType) {
          case "TwoColumn":
            return (
              <TwoColumn
                key={i}
                heading={block.heading}
                text={block.text}
                images={block.images}
                direction={block.direction}
              />
            );
          case "PricingBlock":
            return <PricingBlock key={i} pricingItems={block.pricingItems} />;
          case "PauseBlock":
            return (
              <PauseBlock key={i} texts={block.texts} image={block.image} />
            );
          case "Gallery":
            return (
              <Gallery
                key={i}
                heading={block.heading}
                text={block.text}
                image={block.image}
                images={block.images}
                direction={block.direction}
              />
            );
          case "Show":
            return (
              <Show
                key={i}
                heading={block.heading}
                text={block.text}
                image={block.image}
                images={block.images}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default RenderBlocks;
