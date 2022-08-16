import React from "react";
import styles from "./styles.module.css";

const Map = () => {
  return (
    <div>
      <div className={styles.mapouter}>
        <div className={styles.gmapCanvas}>
          <iframe
            title='map'
            width={"100%"}
            height={300}
            className='gmap_canvas'
            src='https://maps.google.com/maps?q=Reason%20Filling%20Station%201,%20Igbo%20Etche%20Road,%20By%20Eleme%20junction,%20Port%20Harcourt&t=&z=13&ie=UTF8&iwloc=&output=embed'
            frameBorder={0}
            scrolling='no'
            marginHeight={0}
            marginWidth={0}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;

