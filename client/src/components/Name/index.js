import React from "react";

function Name() {
    const styles = {
        portfol: {
            fontFamily: 'Titilium',
            fontSize: '180px',
        },
        io: {
            fontFamily: 'Titilium',
            fontSize: '180px',
            color: 'rgba(68, 68, 209, 0.829)'
        },
        header: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '10% auto 22% auto',
        },
        caption: {
            fontFamily: 'Justink',
            marginTop: '-2%',
            fontSize: '40px',
            fontWeight: '200',

        }
    }

return (
    <div style={styles.header}>
        <h1><span style={styles.portfol}>Portfol.</span><span style={styles.io}>IO</span></h1>
        <h2 style={styles.caption}>Customized portfolios in minutes!</h2>
    </div>
)
}

export default Name