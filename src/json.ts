// The return type of `JSON.parse`
export type Json =
| string
| number
| boolean
| null
| { [property: string]: Json }
| Json[]
