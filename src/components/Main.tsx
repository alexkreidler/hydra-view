import React, { useEffect } from "react";
import store from "../utils/store";
import { TextInput } from "./TextInput";
import { getDocs } from "../services/get";
import ApiDocs from "./ApiDocs";
// import { IApiDocumentation } from "@hydra-cg/heracles.ts";

function Example({ value, s }: { value: string; s: any }) {
  return (
    <a
      className="example"
      href={value}
      onClick={e => {
        e.preventDefault();
        console.log(e.target);

        // @ts-ignore
        s.set("url")(e.target.text);
      }}
    >
      {value}
    </a>
  );
}

const examples = [
  "https://www.markus-lanthaler.com/hydra/event-api/",
  "https://www.markus-lanthaler.com/hydra/api-demo/",
  "https://sources.test.wikibus.org/",
  "http://localhost:9090/home/"
];

export default function Main() {
  let s = store.useStore();

  let curURL = s.get("url");
  // moved these out here to get rid of ESLint react-hooks/exhaustive-deps rule.
  let dset = s.set("docs");
  let rset = s.set("response")
  useEffect(() => {
    (async function() {
      const resp = await getDocs(curURL);
      dset(resp.doc);
      rset(resp.response);
    })();
  }, [curURL, dset, rset]);
  return (
    <div className="main">
      <div className="flex url">
        <TextInput onChange={s.set("url")} value={s.get("url")}></TextInput>
        {/* <button onClick={() => {}}>Go</button> */}
      </div>
      <h3>Examples:</h3>
      <div className="examples">
        {examples.map((url, i) => {
          return <Example key={url} value={url} s={s}></Example>;
        })}
      </div>
      <div className="flex split">
        <div>
          <h1>Response</h1>
          <div className="response">{s.get("response")}</div>
        </div>
        <div>
          <h1>Docs</h1>
          <ApiDocs docs={s.get("docs")}></ApiDocs>
        </div>
      </div>
    </div>
  );
}
