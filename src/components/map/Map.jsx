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
            src='https://maps.google.com/maps?q=%20Rehoboth%20Close%20Egbo%20Etche%20road%20&t=&z=11&ie=UTF8&iwloc=&output=embed'
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

