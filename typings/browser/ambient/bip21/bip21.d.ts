// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/stefanhuber/DefinitelyTyped/3ea8a6280f82118bd942cae312bc857ebeb56c1b/bip21/bip21.d.ts
// Type definitions for bip21 v1.1.2
// Project: https://github.com/bitcoinjs/bip21
// Definitions by: Stefan Huber <https://github.com/stefanhuber/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module bip21 {
    export function decode(uri:string) : {address:string,amount?:number}; 
    export function encode(address:string,options?:any) : string;
}

declare module "bip21" {
    export = bip21;
}