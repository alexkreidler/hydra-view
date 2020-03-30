import React from "react";
import { IApiDocumentation, IClass } from "@hydra-cg/heracles.ts";

function Class({ c }: { c: IClass }) {
  return (
    <div className="class">
      <div className="inline">
        <h3>{c.displayName || "unnamed"}</h3>
        <p>{c.iri}</p>
      </div>
      <p>Properties: {c.supportedProperties.toArray().map((p) => p.property.iri).join(", ")}</p>
    </div>
  );
}

export default function ApiDocs({ docs }: { docs?: IApiDocumentation }) {
  if (!docs) return <></>;
  return (
    <div>
      <h2>{docs.displayName}</h2>
      <p>{docs.description}</p>
      <p>{docs.supportedClasses.length} Classes</p>
      <p>Entrypoint: {docs.entryPoint}</p>
      {docs.supportedClasses.toArray().map((c, i) => {
        return <Class c={c}></Class>;
      })}
    </div>
  );
}
