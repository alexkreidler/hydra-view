import React, { useEffect } from "react";
import store from "../utils/store";
import { TextInput } from "./TextInput";
import { getDocs } from "../services/get";
import ApiDocs from "./ApiDocs";
import { IApiDocumentation } from "@hydra-cg/heracles.ts";

function Example({ value, s }: { value: string; s: any }) {
  return (
    <a
      className="example"
      href=""
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
  "https://sources.test.wikibus.org/"
];

export default function Main() {
  let s = store.useStore();

  useEffect(() => {
    (async function() {
      const resp = await getDocs(s.get("url"));
      s.set("docs")(resp.doc);
      s.set("response")(resp.response);
    })();
  }, [s.get("url")]);
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
