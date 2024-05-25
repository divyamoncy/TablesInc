import { NodeProps } from "reactflow";

export default function TableSquare4Seater(props: NodeProps) {
  return (
    <img
      src="/table4.png"
      alt=""
      height={"200px"}
      className="tree-mag"
      style={{
        filter:
          props.selected ? "drop-shadow(2px 0 0 blue) drop-shadow(0 2px 0 blue) drop-shadow(-2px 0 0 blue) drop-shadow(0 -2px 0 blue)" : "",
      }}
    />
  );
}
