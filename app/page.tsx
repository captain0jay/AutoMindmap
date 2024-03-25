"use client"
import React, { useCallback, useState, useRef } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap,
  Controls,
  Background,
  Position } from 'reactflow';
import Image from 'next/image';
  
import 'reactflow/dist/style.css';
import ButtonfieldNode from './(components)/Buttonfield';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const nodeTypes = {  Buttonfield: ButtonfieldNode };

const initialNodes = [
  {
    id: '1',
    type: 'Buttonfield',
    position: { x: 50, y: 250 },
    data: { label: 'Start', classw: 'w-[150px]' , content: 'Starting of the Car manufacturing!', dimage: '' },
    ...nodeDefaults,
  },
  {
    id: '2',
    type: 'Buttonfield',
    position: { x: 300, y: 50 },
    data: { label: 'Research', classw: 'w-[150px] bg-blue-500' , content: 'Research of cars and stuff', dimage: 'https://media.istockphoto.com/id/1353796860/photo/diverse-team-of-engineers-working-in-office-at-industrial-factory-industrial-designers.jpg?s=612x612&w=0&k=20&c=HwQ3MxvLretjNfJj-BSkM-v29OoZ3yOT5JXxrLLp_Tw='},
    ...nodeDefaults,
  },
  {
    id: '3',
    type: 'Buttonfield',
    position: { x: 300, y: 150 },
    data: { label: 'Planning', classw: 'w-[150px] bg-blue-300' , content: 'Planning about cars', dimage: 'https://media.istockphoto.com/id/153016580/photo/car-wireframe.jpg?s=612x612&w=0&k=20&c=fZ_SRLRnInHtt-HBHxiJDMVl19CpUqIH9pWeGdzWJJ8='},
    ...nodeDefaults,
  },
  {
    id: '4',
    type: 'Buttonfield',
    position: { x: 300, y: 250 },
    data: { label: 'Designing', classw: 'w-[150px] bg-orange-400' , content: 'Designing of cars', dimage: 'https://www.wikihow.com/images/thumb/7/7e/Design-a-Car-Step-8-Version-2.jpg/v4-460px-Design-a-Car-Step-8-Version-2.jpg.webp'},
    ...nodeDefaults,
  },
  {
    id: '5',
    type: 'Buttonfield',
    position: { x: 300, y: 350 },
    data: { label: 'Manufacturing', classw: 'w-[150px] bg-pink-400' , content: 'Manufacturing of cars', dimage: 'https://m.economictimes.com/thumb/msid-102897652,width-1200,height-900,resizemode-4,imgsize-2145478/ev-manufacturers-have-been-at-the-forefront-of-ev-technology-innovation-that-appeal-to-the-preferences-of-tech-savvy-chinese-consumers-who-like-having-more-intelligent-features-in-cars-.jpg'},
    ...nodeDefaults,
  },
  {
    id: '6',
    type: 'Buttonfield',
    position: { x: 300, y: 450 },
    data: { label: 'Sales/Marketing', classw: 'w-[150px] bg-violet-500' , content: 'Marketing of cars and stuff', dimage: 'https://www.demandhub.co/assets/images/demandhub/articles/car-sales-marketing-ideas-boost-revenue/car-sales-marketing-ideas-boost-revenue-OG.png'},
    ...nodeDefaults,
  },
  // Hard-coded data for additional nodes
  {
    id: '7',
    type: 'Buttonfield',
    position: { x: 600, y: 25 },
    data: { label: 'External', classw: 'w-[150px] bg-blue-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '8',
    type: 'Buttonfield',
    position: { x: 600, y: 75 },
    data: { label: 'Internal', classw: 'w-[150px] bg-blue-500' , content: '', dimage: '' },
    ...nodeDefaults,
  },
  {
    id: '9',
    type: 'Buttonfield',
    position: { x: 600, y: 125 },
    data: { label: 'PRD', classw: 'w-[150px] bg-blue-300' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '10',
    type: 'Buttonfield',
    position: { x: 600, y: 175 },
    data: { label: 'Specs', classw: 'w-[150px] bg-blue-300' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '11',
    type: 'Buttonfield',
    position: { x: 600, y: 225 },
    data: { label: 'Hardware', classw: 'w-[150px] bg-orange-400' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '12',
    type: 'Buttonfield',
    position: { x: 600, y: 275 },
    data: { label: 'Software', classw: 'w-[150px] bg-orange-400' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '13',
    type: 'Buttonfield',
    position: { x: 600, y: 325 },
    data: { label: 'Material', classw: 'w-[150px] bg-pink-400' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '14',
    type: 'Buttonfield',
    position: { x: 600, y: 375 },
    data: { label: 'Production', classw: 'w-[150px] bg-pink-400', content: '', dimage: '' },
    ...nodeDefaults,
  },
  {
    id: '15',
    type: 'Buttonfield',
    position: { x: 600, y: 425 },
    data: { label: 'Online', classw: 'w-[150px] bg-violet-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '16',
    type: 'Buttonfield',
    position: { x: 600, y: 475 },
    data: { label: 'Dealership', classw: 'w-[150px] bg-violet-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  // Hard-coded data for additional nodes
  {
    id: '17',
    type: 'Buttonfield',
    position: { x: 900, y: 50 },
    data: { label: 'B2C', classw: 'w-[150px] bg-blue-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '18',
    type: 'Buttonfield',
    position: { x: 900, y: 100 },
    data: { label: 'B2C', classw: 'w-[150px] bg-blue-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  ,
  // Hard-coded data for additional nodes
  {
    id: '19',
    type: 'Buttonfield',
    position: { x: 1200, y: 25 },
    data: { label: 'Online', classw: 'w-[150px] bg-blue-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '20',
    type: 'Buttonfield',
    position: { x: 1200, y: 75 },
    data: { label: 'Interview', classw: 'w-[150px] bg-blue-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  // Hard-coded data for additional nodes
  {
    id: '21',
    type: 'Buttonfield',
    position: { x: 1200, y: 125 },
    data: { label: 'Public Data', classw: 'w-[150px] bg-blue-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
  {
    id: '22',
    type: 'Buttonfield',
    position: { x: 1200, y: 175 },
    data: { label: 'Health', classw: 'w-[150px] bg-blue-500' , content: '', dimage: ''},
    ...nodeDefaults,
  },
];


const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
  {
    id: 'e1-4',
    source: '1',
    target: '4',
  },
  {
    id: 'e1-5',
    source: '1',
    target: '5',
  },
  {
    id: 'e1-6',
    source: '1',
    target: '6',
  },
  {
    id: 'e2-7',
    source: '2',
    target: '7',
  },
  {
    id: 'e2-8',
    source: '2',
    target: '8',
  },
  {
    id: 'e3-9',
    source: '3',
    target: '9',
  },
  {
    id: 'e3-10',
    source: '3',
    target: '10',
  },
  {
    id: 'e4-11',
    source: '4',
    target: '11',
  },
  {
    id: 'e4-12',
    source: '4',
    target: '12',
  },
  {
    id: 'e5-13',
    source: '5',
    target: '13',
  },
  {
    id: 'e5-14',
    source: '5',
    target: '14',
  },
  {
    id: 'e6-15',
    source: '6',
    target: '15',
  },
  {
    id: 'e6-16',
    source: '6',
    target: '16',
  },
  {
    id: 'e7-17',
    source: '7',
    target: '17',
  },
  {
    id: 'e7-18',
    source: '7',
    target: '18',
  },
  {
    id: 'e17-19',
    source: '17',
    target: '19',
  },
  {
    id: 'e17-20',
    source: '17',
    target: '20',
  },
  {
    id: 'e17-21',
    source: '17',
    target: '21',
  },
  {
    id: 'e17-22',
    source: '17',
    target: '22',
  },
  
];

 export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [nodeContent, setNodeContent] = useState('');
  const [nodeUrl, setNodeUrl] = useState('');

  const handleNodeMouseMove = (event: any, initialNodes: any) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY });
    setNodeContent(initialNodes.data.content);
    setNodeUrl(initialNodes.data.dimage);
    setShowTooltip(true);
  };

  const handleNodeMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
     <div className='bg-gray-900 w-full h-full flex justify-center items-center absolute overflow-hidden'>
      <div style={{ width: '100vw', height: '100vh' }} className='relative z-1 bg-black flex justify-center items-center'>
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeMouseMove={handleNodeMouseMove}
        onNodeMouseLeave={handleNodeMouseLeave}
        className='z-1'
      >
        <Controls />
        <MiniMap className='sm:block hidden'/>
        <Background variant="dots" gap={32} size={1} />
      </ReactFlow>
      {showTooltip && (
        <div
          className="absolute rounded-lg bg-white shadow-md p-4 w-[350px] h-[150px] grid grid-cols-10"
          style={{
            top: tooltipPosition.y + 10, // Offset to position the tooltip below the mouse pointer
            left: tooltipPosition.x,
            zIndex: 9999, // Ensure the tooltip is on top of other components
            transition: 'opacity 2s ease', // Slow animation when appearing and disappearing
          }}
        >
          {nodeUrl? 
          <div className="col-span-4 rounded overflow-hidden">
          <div className="w-[125px] h-[125px] rounded">
            <img src={nodeUrl} alt="node" className="object-cover w-full h-full rounded" />
          </div>
        </div>
        
           : <div></div>}
          {nodeUrl? 
            <div className="ml-2 col-span-6">
              {nodeContent}
            </div>:
            <div className="col-span-10">
              {nodeContent}
            </div>
          }
        </div>
      )}

      </div>
     </div>
    </>
  );
}
