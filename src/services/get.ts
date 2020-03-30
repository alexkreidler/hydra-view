import HydraClientFactory, {IApiDocumentation} from "@hydra-cg/heracles.ts";

let hydraClient = HydraClientFactory.configure().withDefaults().andCreate();

export async function getDocs(url: string): Promise<{response: any, doc: IApiDocumentation}> {
    console.log("Getting", url);
    
    const r = await hydraClient.getResource(url);
    const doc = await hydraClient.getApiDocumentation(url)
    let val = r.json();
    console.log(val, JSON.stringify(val, null, 2));
    
    return {
        response: JSON.stringify(val, null, 2),
        doc: doc
    }
}