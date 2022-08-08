import { map } from "lodash";
import React from "react";

export default function RepoCard({
  fullName,
  forks,
  issues,
  watchers,
  URL,
  id,
}) {
  const repoAttributeMap = [
    {
      attributeName: "Forks",
      attributeValue: forks,
    },
    {
      attributeName: "Issues",
      attributeValue: issues,
    },
    {
      attributeName: "Watchers",
      attributeValue: watchers,
    },
  ];

  return (
    <div className="card" key={id}>
      <div className="cardHeader">
        <h3 style={{ textAlign: "center" }}>
          <a href={URL}>{fullName}</a>
        </h3>
      </div>
      <div className="cardBody">
        {map(repoAttributeMap, (repoAttribute) => (
          <div className="repoAttributes">
            <h4 style={{ margin: 0 }}>{repoAttribute.attributeValue}</h4>
            <p style={{ margin: 0 }}>{repoAttribute.attributeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
