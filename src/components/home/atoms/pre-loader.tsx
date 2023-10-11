import { Html } from '@react-three/drei';
const PreLoader = () => {
  return (
    <Html prepend center distanceFactor={1}>
      <div className="flex">
        <div className="relative">
          <div className="absolute w-12 h-12 border-4 border-gray-200 border-solid rounded-full" />
          <div className="absolute w-12 h-12 border-4 border-green-500 border-solid rounded-full animate-spin border-t-transparent" />
        </div>
      </div>
    </Html>
  );
};

export default PreLoader;
