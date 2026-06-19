import {
  useEffect,
  useState,
} from "react";

import {
  getHistory,
} from "../services/analysisService";

export default function History() {

  const [items, setItems] =
    useState([]);

  useEffect(() => {

    getHistory()
      .then((data) =>
        setItems(
          data.analyses
        )
      );

  }, []);

  return (
    <div className="p-10">

      <h1>
        Analysis History
      </h1>

      {items.map((item: any) => (

        <div
          key={item._id}
          className="
          p-4
          border
          rounded-xl
          my-2"
        >
          {item.product}
        </div>

      ))}

    </div>
  );
}