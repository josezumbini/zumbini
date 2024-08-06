import React from 'react';
import Link from 'next/link';
import styles from '../styles/globals.module.css'


function EspacoLeitor() {
    return (
        <div className={styles.slimLandingSkin}>
            <div className={styles.container}>
                <h1><i class="fa fa-binoculars mg-r-10" aria-hidden="true"></i> Espaço do Eleitor(a)</h1>
                <h6>Este é nosso canal exclusivo de comunicação. Por aqui você poderá entrar em contato direto comigo e com minha equipe e fazer suas denúncias, reclamações elegios e muito mais. Seus dados serão mantidos em total sigilo.</h6>
                <div className={`${styles.row} ${styles.justifyContentCenter}`}>
                </div>
                <div className={`${styles.row} ${styles.justifyContentCenter}`}>
                    <div className={`${styles.colSm6} ${styles.colLg5}`}>
                        <figure>
                            <center><Link href="/"><button className={`${styles.btn} ${styles.btnDanger} ${styles.btnBlock} ${styles.btnLg} ${styles.mgB10}`}> Fazer uma Denúncia</button></Link></center>
                            <center><Link href="/"><button className={`${styles.btn} ${styles.btnSuccess} ${styles.btnBlock} ${styles.btnLg}`}> Fazer um Elogio ou Depoimento</button></Link></center>
                        </figure>
                    </div>
                    <div className={`${styles.colSm6} ${styles.colLg5} ${styles.mgT15} ${styles.mgSmT0}`}>
                        <figure>
                            <center><Link href="/"><button className={`${styles.btn} ${styles.btnInfo} ${styles.btnBlock} ${styles.btnLg} ${styles.mgB10}`}> Quero fazer parte da equipe</button></Link></center>
                            <center><Link href="/"><button className={`${styles.btn} ${styles.btnWarning} ${styles.btnBlock} ${styles.btnLg}`}> Baixar material de Campanha</button></Link></center>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EspacoLeitor;