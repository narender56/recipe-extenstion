import React from 'react';

import styles from './RoundedIcon.module.css';

interface RoundedIconProps {
    icon: string;
}

export default function RoundedIcon({ icon }: RoundedIconProps) {
    return (
        <div className={styles['icon-wrapper']}>
            <img className={styles['icon']} src={require(`../../assets/img/${icon}.png`)} alt={'logo'} />
        </div>
    )
}