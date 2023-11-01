import React, { memo } from "react";
import { bxiInstagram } from "boxicons";
function Footer() {
  return (
    <>
      <section className="footer">
        <div>
          <h1>About</h1>
        </div>
        <div>
          <h1>Privacy Policy</h1>
        </div>
        <div>
          <h1>Copy Rights</h1>
        </div>
        <div>
          <h1>Contact</h1>
          {bxiInstagram}
        </div>
      </section>
    </>
  );
}

export default memo(Footer);
