import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, Vector2 } from 'three'
import { Html, useProgress } from '@react-three/drei'
import profileImg from '../assets/profile.jpeg'
import ErrorBoundary from './ErrorBoundary'

const VertexShader = `
varying vec2 vUv;
varying float vWave;
uniform float uTime;
uniform vec2 uMouse;

void main() {
  vUv = uv;
  vec3 pos = position;
  float dist = distance(uv, uMouse);
  float wave = sin(dist * 10.0 - uTime * 2.0) * 0.05 * smoothstep(0.5, 0.0, dist);
  vWave = wave;
  pos.z += wave;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

const FragmentShader = `
uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;
varying float vWave;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 uv = vUv;
    float dist = distance(uv, uMouse);
    float strength = smoothstep(0.5, 0.0, dist);
    
    float r = texture2D(uTexture, uv + vec2(0.01 * strength, 0.0)).r;
    float g = texture2D(uTexture, uv).g;
    float b = texture2D(uTexture, uv - vec2(0.01 * strength, 0.0)).b;
    
    float scanline = sin(uv.y * 200.0 + uTime * 5.0) * 0.02 * strength;
    float noise = random(uv + uTime) * 0.05 * strength;
    
    vec3 color = vec3(r, g, b);
    color += vec3(vWave * 4.0);
    color -= scanline;
    color += noise;
    
    gl_FragColor = vec4(color, 1.0);
}
`

function ImagePlane() {
    const meshRef = useRef<any>(null)

    // Use try-catch or handling if texture fails? useLoader suspends on error usually.
    const texture = useLoader(TextureLoader, profileImg)

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMouse: { value: new Vector2(0.5, 0.5) },
            uResolution: { value: new Vector2(1, 1) }
        }),
        [texture]
    )

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime()
            const mouse = state.pointer
            meshRef.current.material.uniforms.uMouse.value.lerp(
                new Vector2((mouse.x + 1) / 2, (mouse.y + 1) / 2),
                0.1
            )
        }
    })

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[3, 4, 32, 32]} />
            <shaderMaterial
                vertexShader={VertexShader}
                fragmentShader={FragmentShader}
                uniforms={uniforms}
                transparent={true}
            />
        </mesh>
    )
}

function Loader() {
    const { progress } = useProgress()
    return (
        <Html center>
            <div className="text-accent-cyan font-mono text-xs p-2 bg-black/50 backdrop-blur rounded">
                {progress.toFixed()}%
            </div>
        </Html>
    )
}

function FallbackBox() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

export default function Profile3D() {
    return (
        <ErrorBoundary fallback={<div className="text-red-500 p-4">3D Profile Error</div>}>
            <div className="w-full h-full relative cursor-crosshair">
                <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={<Loader />}>
                        <ErrorBoundary fallback={<FallbackBox />}>
                            <ImagePlane />
                        </ErrorBoundary>
                    </Suspense>
                </Canvas>

                {/* Instruction Overlay */}
                <div className="absolute top-4 right-4 pointer-events-none opacity-50 text-[10px] text-accent-cyan font-mono tracking-widest uppercase">
                    Interact
                </div>
            </div>
        </ErrorBoundary>
    )
}
