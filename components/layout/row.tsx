import "./row.less"
import "./panel.less"
import DivFactory, {DivComponent} from "../div-factory"

type BaseClasses = {
  flex: string
  justifyContent: string
  alignItems: string
}

const BasicClasses = {
  flex: {
    row: "flex-row",
    column: "flex-column",
  },
  justifyContent: {
    spaceBetween: "justify-between",
    spaceAround: "justify-around",
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    evenly: "justify-evenly",
    stretch: "justify-stretch",
  },
  alignItems: {
    start: "align-start",
    end: "align-end",
    center: "align-center",
    stretch: "align-stretch",
    baseline: "align-baseline",
  },
}

export const Row = DivFactory("row")

type ColSpecificProps = BaseClasses & {
  size?: string,
}
export const Col = DivFactory<ColSpecificProps>("col", {
  size: {

  },
  ...BasicClasses,
})

export const PanelHeader = DivFactory("panel-header")
export const PanelBody = DivFactory("panel-body")
export const PanelFooter = DivFactory("panel-footer")

type Panel = DivComponent & {
  Header?: DivComponent,
  Body?: DivComponent,
  Footer?: DivComponent,
}

export const Panel: Panel = DivFactory("panel")
Panel.Header = PanelHeader
Panel.Body = PanelBody
Panel.Footer = PanelFooter

