import React from 'react'
import styles from '../hojas_de_estilo/Loading.module.css'

const Loading = () => {
  return (
   <>
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>
   </>
  )
}

export default Loading
