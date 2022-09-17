import React from "react";
import html5 from "../assets/assets/html.svg";
import css3 from "../assets/assets/css.svg";
import python from "../assets/assets/python.svg";
import android from "../assets/assets/android.svg";
import aws from "../assets/assets/aws.svg";
import c from "../assets/assets/c.svg";
import cpp from "../assets/assets/c++.svg";
import firebase from "../assets/assets/firebase.svg";
import graphql from "../assets/assets/graphql.svg";
import java from "../assets/assets/java.svg";
import javascript from "../assets/assets/javascript.svg";
import reactIcon from "../assets/assets/react.svg";
import jquery from "../assets/assets/jquery.svg";
import php from "../assets/assets/php.svg";
import laravel from "../assets/assets/laravel.svg";
import mysql from "../assets/assets/mysql.svg";
import mongo from "../assets/assets/mongo.svg";
import ts from "../assets/assets/ts.svg";

function MyTechStack() {
  return (
    <div
      className="row mt-3 me-0 ms-0  text-white p-3"
      style={{ width: "100%" }}
    >
      <div className="col-sm-12 mt-5 mx-auto text-center" data-aos="zoom-in-up">
        <h3
          className="pb-2  border-bottom border-light mx-auto animate__fadeInUpBig animate__animated animate__slow"
          style={{ width: "fit-content" }}
        >
          My Tech Stack &#127942;
        </h3>
        <div
          className="col-sm-12 mt-5 mx-auto row justify-content-center stackContainer"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <img className="stack-icon" alt="html5" src={html5} />
          <img className="stack-icon" alt="css3" src={css3} />
          <img className="stack-icon" alt="python" src={python} />
          <img className="stack-icon" alt="android" src={android} />
          <img className="stack-icon" alt="aws" src={aws} />
          <img className="stack-icon" alt="c" src={c} />
          <img className="stack-icon" alt="cpp" src={cpp} />
          <img className="stack-icon" alt="firebase" src={firebase} />
          <img className="stack-icon" alt="graphql" src={graphql} />
          <img className="stack-icon" alt="java" src={java} />
          <img className="stack-icon" alt="php" src={php} />
          <img className="stack-icon" alt="laravel" src={laravel} />

          <img className="stack-icon" alt="javascript" src={javascript} />
          <img className="stack-icon" alt="react" src={reactIcon} />
          <img className="stack-icon" alt="jquery" src={jquery} />

          <img className="stack-icon" alt="mysql" src={mysql} />
          <img className="stack-icon" alt="mongo" src={mongo} />
          <img className="stack-icon" alt="ts" src={ts} />
        </div>
      </div>
    </div>
  );
}

export default MyTechStack;
