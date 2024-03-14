import styles from './SkeletonShapes.module.css';

export function CircleSkeleton({ size }) {
  return (
    <div className={`${styles.circle} ${size && styles[size]}`}></div>
  );
}

export function RectangleSkeleton({ width, height }) {
  return (
    <div className={`${styles.rectangle}`} style={{ width, height }}></div>
  );
}
