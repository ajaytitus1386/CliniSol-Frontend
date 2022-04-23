import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { text } from "stream/consumers";

const Support = () => {

  return (
    <div className="container">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark">
        Facing problems? Need help?
      </h1>
      <div className="tile is-ancestor mt-6">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child">
              {/* Appointment Table */}
              <div className="card" style={{ textAlign: 'center' }} >
                <br />
                <Image
                  src="https://picsum.photos/id/192/400/400.jpg"
                  alt="Picture of the user"
                  width="240px"
                  height="240px"
                  style={{ borderRadius: '50%', margin: '1rem auto' }}
                />
                <br />
                <div className="card-content" style={{ textAlign: 'center' }}>
                  <h3 className="is-size-2 is-grey-dark has-text-weight-bold">
                    Contact Us
                  </h3>
                  <div className="columns mt-5">
                    <div className="column is-size-5">Raaghav Kulkarni Titus Enterprises</div>
                    <div className="column is-size-5">+91 987-898-6756</div>
                    <div className="column is-size-5">+91 987-898-5700</div>
                    <div className="column is-size-5">support@rkt.enterprises</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
            background: #EDF1F5;
            padding: 2rem;
            border-radius: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Support;
