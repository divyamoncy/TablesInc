import { NodeProps, NodeResizer } from "reactflow";

export default function Tree(props: NodeProps) {
  return (
    <>
      <NodeResizer isVisible={props.selected} minWidth={60} minHeight={60} keepAspectRatio={true} />
      <div>
        <img
          src="/magnoliaTree.png"
          alt=""
          className="tree-mag"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            filter: props.selected
              ? "drop-shadow(2px 0 0 blue) drop-shadow(0 2px 0 blue) drop-shadow(-2px 0 0 blue) drop-shadow(0 -2px 0 blue)"
              : "",
          }}
        />
      </div>
    </>
  );
}
