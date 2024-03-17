import React from "react";
import "./PropertyList.css";

export default function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/53/f2/40/53f240b1941a4d5ecfd179c7091d7d1a.jpg"
          alt=""
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/73/a0/37/73a0376e9741c18590fdd3835aae7f25.jpg"
          alt=""
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>145 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/39/ba/b3/39bab3395caf04c337f34b93a7c981d5.jpg"
          alt=""
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>546 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/22/5e/be/225ebe6849b5714561c783f995167008.jpg"
          alt=""
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>875 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/06/35/10/0635103b140ce9e0f95e6a31bd435fb7.jpg"
          alt=""
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>278 hotels</h2>
        </div>
      </div>
    </div>
  );
}
