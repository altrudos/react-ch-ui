import {addToStringList} from "./string"

export type ClassNameConfig = string | { [key: string]: boolean };

/**
 * cx groups provided terms together as a list of HTML classes.
 * @param x is either a string or an object with classes as the key and a boolean as the value.
 *  a value of true means to include it in the classlist.
 */
export default function cx( ...x : ClassNameConfig[] ) : string {
  const str : string[] = [];

  x.forEach( x => {
    if ( typeof(x) === "string" ) {
      addToStringList(str, x)
      return
    }

    for(let i in x) {
      if (x[i]) {
        addToStringList(str, i)
      }
    }
  } )

  return str.join(" ")
}