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

  const [globalSpeed, setGlobalSpeed] = useState(1);
  const [displayH, setDisplayH] = useState(false);
  const [displayV, setDisplayV] = useState(false);
  const [springDepth, setSpringDepth] = useState(.0);

  let pointsGeometry = new THREE.BufferGeometry();
  let xGeometry = new THREE.BufferGeometry();
  let yGeometry = new THREE.BufferGeometry();
  let hConnectorGeo = new THREE.BufferGeometry();
  let vConnectorGeo = new THREE.BufferGeometry();

  const moveCombinedLine = points => {
    const xyPoints = [];
    for (let point in points) {
      if(points[point].x===0&&points[point].y===0&&points[point].z===0) continue;
      const newPoint = new THREE.Vector3(points[point].x, points[point].y, springDepth * (0 - globalSpeed * (points.length - parseInt(point)) / (50)));
      xyPoints.push(newPoint);
    }
    return xyPoints;
  }

  const moveHorizontalLine = points => {
    const yPoints = [];
    for (let point in points) {
      const newPoint = new THREE.Vector3(-globalSpeed * (points.length - parseInt(point)) / (100) - 2, points[point].y, 0);
      yPoints.push(newPoint);
    }
    return yPoints;
  }

  const moveVerticalLine = (points) => {
    const xPoints = [];
    for (let point in points) {
      const newPoint = new THREE.Vector3(points[point].x, globalSpeed * (parseInt(point) - points.length) / (100) - 3, 0);
      xPoints.push(newPoint)
    }
    return xPoints;
  }

  useFrame((state, delta) => {
    pointsGeometry.setFromPoints(moveCombinedLine(state.globalPositions));
    xGeometry.setFromPoints(moveVerticalLine(state.globalPositions));
    yGeometry.setFromPoints(moveHorizontalLine(state.globalPositions));
    rotatorMeshRef.current.rotation.z -= delta * globalSpeed / 2;
    rotatorRef1.current.rotation.z += delta * globalSpeed;
    rotatorRef2.current.rotation.z += delta * globalSpeed;
    rotatorRef3.current.rotation.z += delta * globalSpeed;
    rotatorRef4.current.rotation.z += delta * globalSpeed;
    rotatorRef5.current.rotation.z += delta * globalSpeed;
    rotatorRef6.current.rotation.z += delta * globalSpeed;
    rotatorRef7.current.rotation.z += delta * globalSpeed;
    rotatorRef8.current.rotation.z += delta * globalSpeed;
    rotatorRef9.current.rotation.z += delta * globalSpeed;
    rotatorRef10.current.rotation.z += delta * globalSpeed;
    rotatorRef11.current.rotation.z += delta * globalSpeed;
    rotatorRef12.current.rotation.z += delta * globalSpeed;
    rotatorRef13.current.rotation.z += delta * globalSpeed;
    rotatorRef14.current.rotation.z += delta * globalSpeed;
    rotatorRef15.current.rotation.z += delta * globalSpeed;
    rotatorRef16.current.rotation.z += delta * globalSpeed;
    rotatorRef17.current.rotation.z += delta * globalSpeed;
    rotatorRef18.current.rotation.z += delta * globalSpeed;
    rotatorRef19.current.rotation.z += delta * globalSpeed;
    rotatorRef20.current.rotation.z += delta * globalSpeed;
    rotatorRef21.current.rotation.z += delta * globalSpeed;
    rotatorRef22.current.rotation.z += delta * globalSpeed;
    rotatorRef23.current.rotation.z += delta * globalSpeed;
    rotatorRef24.current.rotation.z += delta * globalSpeed;
    rotatorRef25.current.rotation.z += delta * globalSpeed;
    rotatorRef26.current.rotation.z += delta * globalSpeed;
    rotatorRef27.current.rotation.z += delta * globalSpeed;
    rotatorRef28.current.rotation.z += delta * globalSpeed;
    rotatorRef29.current.rotation.z += delta * globalSpeed;
    rotatorRef30.current.rotation.z += delta * globalSpeed;
  });

  return <mesh
    ref={meshRef}
  >
    <mesh
      ref={rotatorMeshRef}
    >
<Rotator rotatorRef={rotatorRef1} radius={.1}>
<Rotator rotatorRef={rotatorRef2} radius={.3} >
<Rotator rotatorRef={rotatorRef3} radius={.5} >
<Rotator rotatorRef={rotatorRef4} radius={.7 } >
<Rotator rotatorRef={rotatorRef5} radius={.9 } >
<Rotator rotatorRef={rotatorRef6} radius={.11 } >
<Rotator rotatorRef={rotatorRef7} radius={.33 } >
<Rotator rotatorRef={rotatorRef8} radius={.55 } >
<Rotator rotatorRef={rotatorRef9} radius={.77 } >
<Rotator rotatorRef={rotatorRef10} radius={.99 } >
<Rotator rotatorRef={rotatorRef11} radius={.111 } >
<Rotator rotatorRef={rotatorRef12} radius={.333 } >
<Rotator rotatorRef={rotatorRef13} radius={.555 } >
<Rotator rotatorRef={rotatorRef14} radius={.777 } >
<Rotator rotatorRef={rotatorRef15} radius={.999 } >
<Rotator rotatorRef={rotatorRef16} radius={.1111 } >
<Rotator rotatorRef={rotatorRef17} radius={.3333 } >
<Rotator rotatorRef={rotatorRef18} radius={.5555 } >
<Rotator rotatorRef={rotatorRef19} radius={.7777 } >
<Rotator rotatorRef={rotatorRef20} radius={.9999 } >
<Rotator rotatorRef={rotatorRef21} radius={.11111 } >
<Rotator rotatorRef={rotatorRef22} radius={.33333 } >
<Rotator rotatorRef={rotatorRef23} radius={.55555 } >
<Rotator rotatorRef={rotatorRef24} radius={.77777 } >
<Rotator rotatorRef={rotatorRef25} radius={.99999 } >
<Rotator rotatorRef={rotatorRef26} radius={.111111 } >
<Rotator rotatorRef={rotatorRef27} radius={.333333 } >
<Rotator rotatorRef={rotatorRef28} radius={.555555 } >
<Rotator rotatorRef={rotatorRef29} radius={.777777 } >
<Rotator rotatorRef={rotatorRef30} radius={.999999 } isFinal={true} >
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
      position={[0, 0, 0]}
    >
      <pointsMaterial sizeAttenuation={false} size={.01} attach="material" color="green" />
    </points>
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

