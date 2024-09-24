import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import React, { useEffect, useRef, useState } from "react";
import { Rotator } from "./Rotator";

export const FourierDrawer = (props) => {
  const verticalRef = useRef();
  const horizontalRef = useRef();
  const meshRef = useRef();
  const lineRef = useRef();
  const rotatorMeshRef = useRef();
  const rotatorRef1 = useRef();
  const rotatorRef2 = useRef();
  const rotatorRef3 = useRef();
  const rotatorRef4 = useRef();
  const rotatorRef5 = useRef();
  const rotatorRef6 = useRef();
  const rotatorRef7 = useRef();
  const rotatorRef8 = useRef();
  const rotatorRef9 = useRef();
  const rotatorRef10 = useRef();
  const rotatorRef11 = useRef();
  const rotatorRef12 = useRef();
  const rotatorRef13 = useRef();
  const rotatorRef14 = useRef();
  const rotatorRef15 = useRef();
  const rotatorRef16 = useRef();
  const rotatorRef17 = useRef();
  const rotatorRef18 = useRef();
  const rotatorRef19 = useRef();
  const rotatorRef20 = useRef();
  const rotatorRef21 = useRef();
  const rotatorRef22 = useRef();
  const rotatorRef23 = useRef();
  const rotatorRef24 = useRef();
  const rotatorRef25 = useRef();
  const rotatorRef26 = useRef();
  const rotatorRef27 = useRef();
  const rotatorRef28 = useRef();
  const rotatorRef29 = useRef();
  const rotatorRef30 = useRef();

  const [globalSpeed, setGlobalSpeed] = useState(.25);
  const [displayH, setDisplayH] = useState(false);
  const [displayV, setDisplayV] = useState(false);
  const [displayLine, setDisplayLine] = useState(false);
  const [springDepth, setSpringDepth] = useState(0.00);
  const [rotatorRadii, setRotatorRadii] = useState([
    1/96.1,
    2/48.02,
    3/24.003,
    4/12.0004,
    5/6.00005,
    2/80.2,
    3/40.03,
    4/20.004,
    5/10.0005,
    6/5.00006,
    3/64.3,
    4/32.04,
    5/16.005,
    6/8.0006,
    7/4.00007,
    4/48.4,
    5/24.05,
    6/12.006,
    7/6.0007,
    8/3.00008,
    5/32.5,
    6/16.06,
    7/8.007,
    8/4.0008,
    9/2.00009,
    6/16.6,
    7/8.07,
    8/4.008,
    9/2.0009,
    10/1.00010,
  ]);

  let pointsGeometry = new THREE.BufferGeometry();
  let xGeometry = new THREE.BufferGeometry();
  let yGeometry = new THREE.BufferGeometry();
  let hConnectorGeo = new THREE.BufferGeometry();
  let vConnectorGeo = new THREE.BufferGeometry();
  const colors = [];

  const moveCombinedLine = points => {
    const xyPoints = [];
    if(points[0].x===0&&points[0].y===0&&points[0].z===0) points.shift();
    for(let i=0; i<points.length-100000; i++){
      points.shift();
    }
    let pointCount = 0;
    for (let point of points) {
      const depth = (Math.pow(point.x*point.x*point.x*point.x+point.y*point.y*point.y*point.y,.35)*springDepth - 
      Math.pow(point.x*point.x+point.y*point.y,.0125)*springDepth+Math.pow(point.x*point.x+point.y*point.y,-.025)*springDepth+(pointCount*springDepth)/4);
      pointCount++;
      const newPoint = new THREE.Vector3(point.x, point.y, depth)
      xyPoints.push(newPoint);
      let color = new THREE.Color();
      color.setRGB((pointCount/7)%.5+.5,(pointCount/7)%.5+.5,(pointCount/7)%.5+.5,THREE.SRGBColorSpace);
      colors.push(color.r,color.g,color.b);
      for(let c=0; c<colors.length-100000; c++){
        colors.shift();
      }
    }
    pointsGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors,3));
    return xyPoints;
  }

  const moveHorizontalLine = points => {
    const yPoints = [];
    for (let point in points) {
      const newPoint = new THREE.Vector3(-globalSpeed * (points.length - parseInt(point)) / (1) - 2, points[point].y, 0);
      yPoints.push(newPoint);
    }
    return yPoints;
  }

  const moveVerticalLine = (points) => {
    const xPoints = [];
    for (let point in points) {
      const newPoint = new THREE.Vector3(points[point].x, globalSpeed * (parseInt(point) - points.length) / (1) - 3, 0);
      xPoints.push(newPoint)
    }
    return xPoints;
  }

  useFrame((state, delta) => {
    pointsGeometry.setFromPoints(moveCombinedLine(state.globalPositions));
    xGeometry.setFromPoints(moveVerticalLine(state.globalPositions));
    yGeometry.setFromPoints(moveHorizontalLine(state.globalPositions));
    rotatorMeshRef.current.rotation.z -= delta * globalSpeed / 2;
    rotatorRef1.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef1.current.geometry.parameters.radius)/rotatorRef1.current.geometry.parameters.radius;
    rotatorRef2.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef2.current.geometry.parameters.radius)/rotatorRef2.current.geometry.parameters.radius;
    rotatorRef3.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef3.current.geometry.parameters.radius)/rotatorRef3.current.geometry.parameters.radius;
    rotatorRef4.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef4.current.geometry.parameters.radius)/rotatorRef4.current.geometry.parameters.radius;
    rotatorRef5.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef5.current.geometry.parameters.radius)/rotatorRef5.current.geometry.parameters.radius;
    rotatorRef6.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef6.current.geometry.parameters.radius)/rotatorRef6.current.geometry.parameters.radius;
    rotatorRef7.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef7.current.geometry.parameters.radius)/rotatorRef7.current.geometry.parameters.radius;
    rotatorRef8.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef8.current.geometry.parameters.radius)/rotatorRef8.current.geometry.parameters.radius;
    rotatorRef9.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef9.current.geometry.parameters.radius)/rotatorRef9.current.geometry.parameters.radius;
    rotatorRef10.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef10.current.geometry.parameters.radius)/rotatorRef10.current.geometry.parameters.radius;
    rotatorRef11.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef11.current.geometry.parameters.radius)/rotatorRef11.current.geometry.parameters.radius;
    rotatorRef12.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef12.current.geometry.parameters.radius)/rotatorRef12.current.geometry.parameters.radius;
    rotatorRef13.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef13.current.geometry.parameters.radius)/rotatorRef13.current.geometry.parameters.radius;
    rotatorRef14.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef14.current.geometry.parameters.radius)/rotatorRef14.current.geometry.parameters.radius;
    rotatorRef15.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef15.current.geometry.parameters.radius)/rotatorRef15.current.geometry.parameters.radius;
    rotatorRef16.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef16.current.geometry.parameters.radius)/rotatorRef16.current.geometry.parameters.radius;
    rotatorRef17.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef17.current.geometry.parameters.radius)/rotatorRef17.current.geometry.parameters.radius;
    rotatorRef18.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef18.current.geometry.parameters.radius)/rotatorRef18.current.geometry.parameters.radius;
    rotatorRef19.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef19.current.geometry.parameters.radius)/rotatorRef19.current.geometry.parameters.radius;
    rotatorRef20.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef20.current.geometry.parameters.radius)/rotatorRef20.current.geometry.parameters.radius;
    rotatorRef21.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef21.current.geometry.parameters.radius)/rotatorRef21.current.geometry.parameters.radius;
    rotatorRef22.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef22.current.geometry.parameters.radius)/rotatorRef22.current.geometry.parameters.radius;
    rotatorRef23.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef23.current.geometry.parameters.radius)/rotatorRef23.current.geometry.parameters.radius;
    rotatorRef24.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef24.current.geometry.parameters.radius)/rotatorRef24.current.geometry.parameters.radius;
    rotatorRef25.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef25.current.geometry.parameters.radius)/rotatorRef25.current.geometry.parameters.radius;
    rotatorRef26.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef26.current.geometry.parameters.radius)/rotatorRef26.current.geometry.parameters.radius;
    rotatorRef27.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef27.current.geometry.parameters.radius)/rotatorRef27.current.geometry.parameters.radius;
    rotatorRef28.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef28.current.geometry.parameters.radius)/rotatorRef28.current.geometry.parameters.radius;
    rotatorRef29.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef29.current.geometry.parameters.radius)/rotatorRef29.current.geometry.parameters.radius;
    rotatorRef30.current.rotation.z += delta * globalSpeed * Math.abs(rotatorRef30.current.geometry.parameters.radius)/rotatorRef30.current.geometry.parameters.radius;
  });

  return <mesh
    ref={meshRef}
  >
    <mesh
      ref={rotatorMeshRef}
    >
<Rotator rotatorRef={rotatorRef1} radius={rotatorRadii[0]}>
<Rotator rotatorRef={rotatorRef2} radius={rotatorRadii[1]} >
<Rotator rotatorRef={rotatorRef3} radius={rotatorRadii[2]} >
<Rotator rotatorRef={rotatorRef4} radius={rotatorRadii[3] } >
<Rotator rotatorRef={rotatorRef5} radius={rotatorRadii[4] } >
<Rotator rotatorRef={rotatorRef6} radius={rotatorRadii[5] } >
<Rotator rotatorRef={rotatorRef7} radius={rotatorRadii[6] } >
<Rotator rotatorRef={rotatorRef8} radius={rotatorRadii[7] } >
<Rotator rotatorRef={rotatorRef9} radius={rotatorRadii[8] } >
<Rotator rotatorRef={rotatorRef10} radius={rotatorRadii[9] } >
<Rotator rotatorRef={rotatorRef11} radius={rotatorRadii[10] } >
<Rotator rotatorRef={rotatorRef12} radius={rotatorRadii[11] } >
<Rotator rotatorRef={rotatorRef13} radius={rotatorRadii[12] } >
<Rotator rotatorRef={rotatorRef14} radius={rotatorRadii[13] } >
<Rotator rotatorRef={rotatorRef15} radius={rotatorRadii[14] } >
<Rotator rotatorRef={rotatorRef16} radius={rotatorRadii[15] } >
<Rotator rotatorRef={rotatorRef17} radius={rotatorRadii[16] } >
<Rotator rotatorRef={rotatorRef18} radius={rotatorRadii[17] } >
<Rotator rotatorRef={rotatorRef19} radius={rotatorRadii[18] } >
<Rotator rotatorRef={rotatorRef20} radius={rotatorRadii[19] } >
<Rotator rotatorRef={rotatorRef21} radius={rotatorRadii[20] } >
<Rotator rotatorRef={rotatorRef22} radius={rotatorRadii[21] } >
<Rotator rotatorRef={rotatorRef23} radius={rotatorRadii[22] } >
<Rotator rotatorRef={rotatorRef24} radius={rotatorRadii[23] } >
<Rotator rotatorRef={rotatorRef25} radius={rotatorRadii[24] } >
<Rotator rotatorRef={rotatorRef26} radius={rotatorRadii[25] } >
<Rotator rotatorRef={rotatorRef27} radius={rotatorRadii[26] } >
<Rotator rotatorRef={rotatorRef28} radius={rotatorRadii[27] } >
<Rotator rotatorRef={rotatorRef29} radius={rotatorRadii[28] } >
<Rotator rotatorRef={rotatorRef30} radius={rotatorRadii[29] } isFinal={true} >
                                                                </Rotator>
                                                              </Rotator>
                                                            </Rotator>
                                                          </Rotator>
                                                        </Rotator>
                                                      </Rotator>
                                                    </Rotator>
                                                  </Rotator>
                                                </Rotator>
                                              </Rotator>
                                            </Rotator>
                                          </Rotator>
                                        </Rotator>
                                      </Rotator>
                                    </Rotator>
                                  </Rotator>
                                </Rotator>
                              </Rotator>
                            </Rotator>
                          </Rotator>
                        </Rotator>
                      </Rotator>
                    </Rotator>
                  </Rotator>
                </Rotator>
              </Rotator>
            </Rotator>
          </Rotator>
        </Rotator>
      </Rotator>
    </mesh>

    <points
      // tracer line
      ref={lineRef}
      geometry={pointsGeometry}
      position={[0,0,0]}
    >
      <pointsMaterial sizeAttenuation={false} size={.001} attach="material" vertexColors={true} />
    </points>
    <line
      ref={lineRef}
      geometry={pointsGeometry}
      position={[0,0,0]}
      >
        <lineBasicMaterial visible={displayLine} attach="material" color="salmon" />
      </line>
    <line
      ref={verticalRef}
      geometry={xGeometry}
    >
      <lineBasicMaterial visible={displayV} side={THREE.DoubleSide} attach="material" linewidth={5} color="orange" />
    </line>
    <line
      ref={horizontalRef}
      geometry={yGeometry}
    >
      <lineBasicMaterial visible={displayH} side={THREE.DoubleSide} attach="material" linewidth={5} color="orange" />
    </line>
  </mesh>

}

export default FourierDrawer;

