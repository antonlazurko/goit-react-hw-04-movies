import React from 'react'
import styles from './Container.module.css';
type TProps={children: React.ReactNode[]}

export const Container: React.FC<TProps>=({ children}):JSX.Element=><div className={styles.container}>{children}</div>;
export default Container