import React from "react";
import Card from "./Card";

export default function Section({ title, data }) {
  return (
    <div className="mb-20">
      <h2 className="title-heading dark:text-white">{title}</h2>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
