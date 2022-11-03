import React from "react";
import "./container.css";
import { Header } from '../header/header'
import { Dashboard } from '../dashboard/dashboard'
import { Footer } from '../footer/footer'

export const Container = (props) => {
  return(
  <div className="container">
    <Header />
    <Dashboard />
    <Footer />
  </div>
  )
};