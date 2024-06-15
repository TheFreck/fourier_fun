import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import React, { useEffect, useRef, useState } from "react";
import { Rotator } from "./Rotator";
import Pen from "./Pen";
import { PenLine } from "./PenLine";

export const FourierDrawer = (props) => {
  const { } = props;
  const penRef = useRef();
  const innerRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [linePoints, setLinePoints] = useState([]);
  const [showLine, setShowLine] = useState(false);
  const lineRef = useRef();

  let lineGeometry;

  const lineMaterial = new THREE.LineBasicMaterial({ color: "green" })

  useEffect(() => {
    console.log("linePoints: ", linePoints);
  },[linePoints]);
  useFrame((state, delta) => {
    // const points = [];
    // points.push(new THREE.Vector3(0,0,0));
    // points.push(new THREE.Vector3(1,1,1));
    // lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    // lineRef.current.geometry = lineGeometry;
    // penRef.current.rotation.x += delta;
    // penRef.current.rotation.y -= delta;
    // penRef.current.rotation.z += delta;
  });


  return <Rotator radius={1}>
  </Rotator>

  // return (<Rotator radius={.01}>
  //   <Rotator radius={.02}>
  //     <Rotator radius={.03}>
  //       <Rotator radius={.04}>
  //         <Rotator radius={.05}>
  //           <Rotator radius={.06}>
  //             <Rotator radius={.07}>
  //               <Rotator radius={.08}>
  //                 <Rotator radius={.09}>
  //                   <Rotator radius={.10}>
  //                     <Rotator radius={.11}>
  //                       <Rotator radius={.12}>
  //                         <Rotator radius={.13}>
  //                           <Rotator radius={.14}>
  //                             <Rotator radius={.15}>
  //                               <Rotator radius={.16}>
  //                                 <Rotator radius={.17}>
  //                                   <Rotator radius={.18}>
  //                                     <Rotator radius={.19}>
  //                                       <Rotator radius={.20}>
  //                                         <Rotator radius={.21}>
  //                                           <Rotator radius={.22}>
  //                                             <Rotator radius={.23}>
  //                                               <Rotator radius={.24}>
  //                                                 <Rotator radius={.25}>
  //                                                   <Rotator radius={.26}>
  //                                                     <Rotator radius={.27}>
  //                                                       <Rotator radius={.28}>
  //                                                         <Rotator radius={.29}>
  //                                                           <Rotator radius={.30}>
  //                                                             <Rotator radius={.31}>
  //                                                               <Rotator radius={.32}>
  //                                                                 <Rotator radius={.33}>
  //                                                                   <Rotator radius={.34}>
  //                                                                     <Rotator radius={.35}>
  //                                                                       <Rotator radius={.36}>
  //                                                                         <Rotator radius={.37}>
  //                                                                           <Rotator radius={.38}>
  //                                                                             <Rotator radius={.39}>
  //                                                                               <Rotator radius={.40}>
  //                                                                                 <Rotator radius={.41}>
  //                                                                                   <Rotator radius={.42}>
  //                                                                                     <Rotator radius={.43}>
  //                                                                                       <Rotator radius={.44}>
  //                                                                                         <Rotator radius={.45}>
  //                                                                                           <Rotator radius={.46}>
  //                                                                                             <Rotator radius={.47}>
  //                                                                                               <Rotator radius={.48}>
  //                                                                                                 <Rotator radius={.49}>
  //                                                                                                   <Rotator radius={.50}>
  //                                                                                                     <Rotator radius={.51} >
  //                                                                                                       <Rotator radius={.52}>
  //                                                                                                         <Rotator radius={.53}>
  //                                                                                                           <Rotator radius={.54}>
  //                                                                                                             <Rotator radius={.55}>
  //                                                                                                               <Rotator radius={.56}>
  //                                                                                                                 <Rotator radius={.57}>
  //                                                                                                                   <Rotator radius={.58}>
  //                                                                                                                     <Rotator radius={.59}>
  //                                                                                                                       <Rotator radius={.60}>
  //                                                                                                                         <Rotator radius={.61}>
  //                                                                                                                           <Rotator radius={.62}>
  //                                                                                                                             <Rotator radius={.63}>
  //                                                                                                                               <Rotator radius={.64}>
  //                                                                                                                                 <Rotator radius={.65}>
  //                                                                                                                                   <Rotator radius={.66}>
  //                                                                                                                                     <Rotator radius={.67}>
  //                                                                                                                                       <Rotator radius={.68}>
  //                                                                                                                                         <Rotator radius={.69}>
  //                                                                                                                                           <Rotator radius={.70}>
  //                                                                                                                                             <Rotator radius={.71}>
  //                                                                                                                                               <Rotator radius={.72}>
  //                                                                                                                                                 <Rotator radius={.73}>
  //                                                                                                                                                   <Rotator radius={.74}>
  //                                                                                                                                                     <Rotator radius={.75}>
  //                                                                                                                                                       <Rotator radius={.76}>
  //                                                                                                                                                         <Rotator radius={.77}>
  //                                                                                                                                                           <Rotator radius={.78}>
  //                                                                                                                                                             <Rotator radius={.79}>
  //                                                                                                                                                               <Rotator radius={.80}>
  //                                                                                                                                                                 <Rotator radius={.81}>
  //                                                                                                                                                                   <Rotator radius={.82}>
  //                                                                                                                                                                     <Rotator radius={.83}>
  //                                                                                                                                                                       <Rotator radius={.84}>
  //                                                                                                                                                                         <Rotator radius={.85}>
  //                                                                                                                                                                           <Rotator radius={.86}>
  //                                                                                                                                                                             <Rotator radius={.87}>
  //                                                                                                                                                                               <Rotator radius={.88}>
  //                                                                                                                                                                                 <Rotator radius={.89}>
  //                                                                                                                                                                                   <Rotator radius={.90}>
  //                                                                                                                                                                                     <Rotator radius={.91}>
  //                                                                                                                                                                                       <Rotator radius={.92}>
  //                                                                                                                                                                                         <Rotator radius={.93}>
  //                                                                                                                                                                                           <Rotator radius={.94}>
  //                                                                                                                                                                                             <Rotator radius={.95}>
  //                                                                                                                                                                                               <Rotator radius={.96}>
  //                                                                                                                                                                                                 <Rotator radius={.97}>
  //                                                                                                                                                                                                   <Rotator radius={.98}>
  //                                                                                                                                                                                                     <Rotator radius={.99}>
  //                                                                                                                                                                                                       <Rotator radius={1} >
  //                                                                                                                                                                                                       </Rotator>
  //                                                                                                                                                                                                     </Rotator>
  //                                                                                                                                                                                                   </Rotator>
  //                                                                                                                                                                                                 </Rotator>
  //                                                                                                                                                                                               </Rotator>
  //                                                                                                                                                                                             </Rotator>
  //                                                                                                                                                                                           </Rotator>
  //                                                                                                                                                                                         </Rotator>
  //                                                                                                                                                                                       </Rotator>
  //                                                                                                                                                                                     </Rotator>
  //                                                                                                                                                                                   </Rotator>
  //                                                                                                                                                                                 </Rotator>
  //                                                                                                                                                                               </Rotator>
  //                                                                                                                                                                             </Rotator>
  //                                                                                                                                                                           </Rotator>
  //                                                                                                                                                                         </Rotator>
  //                                                                                                                                                                       </Rotator>
  //                                                                                                                                                                     </Rotator>
  //                                                                                                                                                                   </Rotator>
  //                                                                                                                                                                 </Rotator>
  //                                                                                                                                                               </Rotator>
  //                                                                                                                                                             </Rotator>
  //                                                                                                                                                           </Rotator>
  //                                                                                                                                                         </Rotator>
  //                                                                                                                                                       </Rotator>
  //                                                                                                                                                     </Rotator>
  //                                                                                                                                                   </Rotator>
  //                                                                                                                                                 </Rotator>
  //                                                                                                                                               </Rotator>
  //                                                                                                                                             </Rotator>
  //                                                                                                                                           </Rotator>
  //                                                                                                                                         </Rotator>
  //                                                                                                                                       </Rotator>
  //                                                                                                                                     </Rotator>
  //                                                                                                                                   </Rotator>
  //                                                                                                                                 </Rotator>
  //                                                                                                                               </Rotator>
  //                                                                                                                             </Rotator>
  //                                                                                                                           </Rotator>
  //                                                                                                                         </Rotator>
  //                                                                                                                       </Rotator>
  //                                                                                                                     </Rotator>
  //                                                                                                                   </Rotator>
  //                                                                                                                 </Rotator>
  //                                                                                                               </Rotator>
  //                                                                                                             </Rotator>
  //                                                                                                           </Rotator>
  //                                                                                                         </Rotator>
  //                                                                                                       </Rotator>
  //                                                                                                     </Rotator>
  //                                                                                                   </Rotator>
  //                                                                                                 </Rotator>
  //                                                                                               </Rotator>
  //                                                                                             </Rotator>
  //                                                                                           </Rotator>
  //                                                                                         </Rotator>
  //                                                                                       </Rotator>
  //                                                                                     </Rotator>
  //                                                                                   </Rotator>
  //                                                                                 </Rotator>
  //                                                                               </Rotator>
  //                                                                             </Rotator>
  //                                                                           </Rotator>
  //                                                                         </Rotator>
  //                                                                       </Rotator>
  //                                                                     </Rotator>
  //                                                                   </Rotator>
  //                                                                 </Rotator>
  //                                                               </Rotator>
  //                                                             </Rotator>
  //                                                           </Rotator>
  //                                                         </Rotator>
  //                                                       </Rotator>
  //                                                     </Rotator>
  //                                                   </Rotator>
  //                                                 </Rotator>
  //                                               </Rotator>
  //                                             </Rotator>
  //                                           </Rotator>
  //                                         </Rotator>
  //                                       </Rotator>
  //                                     </Rotator>
  //                                   </Rotator>
  //                                 </Rotator>
  //                               </Rotator>
  //                             </Rotator>
  //                           </Rotator>
  //                         </Rotator>
  //                       </Rotator>
  //                     </Rotator>
  //                   </Rotator>
  //                 </Rotator>
  //               </Rotator>
  //             </Rotator>
  //           </Rotator>
  //         </Rotator>
  //       </Rotator>
  //     </Rotator>
  //   </Rotator>
  // </Rotator>);

}

export default FourierDrawer;

