import React from "react";
import html5 from "../../assets/icons/html.svg";
import css3 from "../../assets/icons/css.svg";
import python from "../../assets/icons/python.svg";
import android from "../../assets/icons/android.svg";
import aws from "../../assets/icons/aws.svg";
import c from "../../assets/icons/c.svg";
import cpp from "../../assets/icons/c++.svg";
import firebase from "../../assets/icons/firebase.svg";
import graphql from "../../assets/icons/graphql.svg";
import java from "../../assets/icons/java.svg";
import javascript from "../../assets/icons/javascript.svg";
import reactIcon from "../../assets/icons/react.svg";
import jquery from "../../assets/icons/jquery.svg";
import php from "../../assets/icons/php.svg";
import laravel from "../../assets/icons/laravel.svg";
import mysql from "../../assets/icons/mysql.svg";
import mongo from "../../assets/icons/mongo.svg";
import ts from "../../assets/icons/ts.svg";

function MyTechStack() {
  return (
    <div
      id="techStackDiv"
      className="row mt-3 me-0 ms-0  text-white p-3"
      style={{ width: "100%", minHeight: "80vh" }}
    >
      <div className="col-sm-12 mt-5 mx-auto text-center" data-aos="zoom-in-up">
        <div className="col-sm-12 row ms-0 me-0 mt-4">
          <h2 className="pb-2 col-sm-12 row   m-0 d-flex align-items-center justify-content-center mt-3   border-light  animate__fadeInUpBig animate__animated animate__slow">
            <span style={{ color: "#ccd6f6" }} className=" text-center">
              My Tech Stack &#127942;
            </span>
          </h2>
        </div>

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
