import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

function StarField(props: any) {
    const ref = useRef<any>(null)
    const sphere = random.inSphere(new Float32Array(1000), { radius: 1.5 })

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30
            ref.current.rotation.y -= delta / 45
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.0015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.3}
                />
            </Points>
        </group>
    )
}


export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#0a0a0a]"> {/* Very dark, almost black background */}
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
                {/* Removed floating geometries for minimalism */}
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
        </div>
    )
}
