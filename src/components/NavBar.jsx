import React, { useState } from "react";

import "../css/NavBarStyle.css";
import leftArrowLine from "../assets/left-arrow-line.png";
function NavBar() {
  const [currentHover, SetcurrentHover] = useState("none");

  function ClickedNav(file) {
    console.log(file);
  }
  return (
    <div id="nav-bar">
      <div
        onClick={() => {
          ClickedNav("intro");
        }}
        className="nav-bar-element"
        onMouseOver={() => {
          SetcurrentHover("intro");
        }}
        onMouseLeave={() => {
          SetcurrentHover("none");
        }}
      >
        Introduction
        {currentHover == "intro" ? (
          <div className="laimg">
            <img src={leftArrowLine} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        onClick={() => {
          ClickedNav("aura");
        }}
        className="nav-bar-element"
        onMouseOver={() => {
          SetcurrentHover("aura");
        }}
        onMouseLeave={() => {
          SetcurrentHover("none");
        }}
      >
        Aura Lifestyle
        {currentHover == "aura" ? (
          <div className="laimg">
            <img src={leftArrowLine} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        onClick={() => {
          ClickedNav("sol");
        }}
        className="nav-bar-element"
        onMouseOver={() => {
          SetcurrentHover("sol");
        }}
        onMouseLeave={() => {
          SetcurrentHover("none");
        }}
      >
        Solutions
        {currentHover == "sol" ? (
          <div className="laimg">
            <img src={leftArrowLine} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        onClick={() => {
          ClickedNav("syner");
        }}
        className="nav-bar-element"
        onMouseOver={() => {
          SetcurrentHover("syner");
        }}
        onMouseLeave={() => {
          SetcurrentHover("none");
        }}
      >
        Synergy
        {currentHover == "syner" ? (
          <div className="laimg">
            <img src={leftArrowLine} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        onClick={() => {
          ClickedNav("jour");
        }}
        className="nav-bar-element"
        onMouseOver={() => {
          SetcurrentHover("jour");
        }}
        onMouseLeave={() => {
          SetcurrentHover("none");
        }}
      >
        Journal
        {currentHover == "jour" ? (
          <div className="laimg">
            <img src={leftArrowLine} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        onClick={() => {
          ClickedNav("nex");
        }}
        className="nav-bar-element"
        onMouseOver={() => {
          SetcurrentHover("nex");
        }}
        onMouseLeave={() => {
          SetcurrentHover("none");
        }}
      >
        Nexus
        {currentHover == "nex" ? (
          <div className="laimg">
            <img src={leftArrowLine} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NavBar;
