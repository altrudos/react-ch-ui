import React, {HTMLAttributes} from 'react'
import cx from "../util/cx"

export type DivComponent = React.FunctionComponent<HTMLAttributes<HTMLDivElement>>

export type DivExtraProps = {
  [key: string]: string
}

export default function DivFactory<P extends DivExtraProps>(
  defaultClassName: string,
  classConfig?: { [key in keyof P]?: DivExtraProps }
): DivComponent {
  return function (
    {
      className,
      children,
      ...rest
    }: HTMLAttributes<HTMLDivElement> & P
  ) {

    const otherClasses = [];

    if (!!classConfig) {
      for (const i in classConfig) {
        if (!(i in rest)) continue
        const curr = classConfig[i];

        // We can do this 'as' because classConfig
        // can only have keys which are in P.
        const val = (rest as P )[i];

        // If the value of the prop 'i' is defined
        // in the configuration, we can use it to
        // add the classes in other classes.
        if (val in curr){
          otherClasses.push(curr[val])
        }
      }
    }

    return (
      <div className={cx(defaultClassName, className, ...otherClasses)} {...rest}>
        {children}
      </div>
    )
  }
}

