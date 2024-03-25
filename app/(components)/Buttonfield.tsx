import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from 'next/link';

const handleStyle = { left: 10 };
 
export default function ButtonFieldNode({ data }: any) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div >
        <Drawer>
          <DrawerTrigger><Button variant="outline" className={data.classw}>{data.label}</Button></DrawerTrigger>
          <DrawerContent className='h-full flex justify-center items-center'>
            <DrawerHeader>
            <img src={data.dimage} alt="node" className="object-cover max-w-[700px] h-[200px] md:h-[250px] lg:h-[350px] rounded" />
              <DrawerTitle>{data.content}</DrawerTitle>
              <DrawerDescription>Some content about it</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button asChild>
              <Link href="https://captainjay.xyz/">Hire me by visiting my website!</Link></Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}