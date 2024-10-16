import RichTextParser from "@/utils/RichTextParser";
import React from "react";

export default function SimpleRichText({ body }) {
  return (
    <div className="min-h-screen w-full bg-black">
      <RichTextParser
        content={body}
        className="flex items-center justify-center text-white text-sm Absans-Regular font-medium"
      />
    </div>
  );
}
