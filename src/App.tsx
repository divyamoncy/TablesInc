import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, BackgroundVariant, Connection, Edge, EdgeChange, Node, NodeChange, Panel } from 'reactflow';
import 'reactflow/dist/style.css';
import Tree from './elements/Tree';
import TableSquare4Seater from './elements/TableSquare4Seater';
 

const nodeTypes = { tree: Tree, tableSquare4Seater: TableSquare4Seater };
const initialNodes: Node[] = [
  { id: '1', type: 'tree', position: { x: 0, y: 0 }, data: { label: '1' }, resizing: true},
  { id: '2', type: 'tree', position: { x: 0, y: 100 }, data: { label: '2' }, resizing: true},
  { id: '3', type: 'tableSquare4Seater', position: { x: 0, y: 600 }, data: { label: '3' }},
  { id: '4', type: 'tableSquare4Seater', position: { x: 0, y: 800 }, data: { label: '4' }},
];
const initialEdges: Edge[] = [];
const short = require('short-uuid');

 
export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Edge | Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Panel position="top-center">
          <button onClick={() => setNodes([...nodes, { id: short.generate(), type: 'tree', position: { x: Math.random() * 1000, y: Math.random() * 1000 }, data: { label: "hello" }} ])}>Add Tree</button>
          <button>Add Table</button>

        </Panel>
        <Background color="#ccc" variant={BackgroundVariant.Dots} size={3} />
      </ReactFlow>
    </div>
  );
}

