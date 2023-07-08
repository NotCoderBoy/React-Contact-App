import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Breadcrumb } from "@themesberg/react-bootstrap";

import { ChoosePhotoWidget, ProfileCardWidget } from "../../widgets/Widgets";
import { GeneralInfoForm } from "../../widgets/Forms";

import Profile from "assets/img/profile-cover.jpg";

// components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

export default function Settings() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />

      <main className="content">
        <Navbar />
        <>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-4 mb-md-0">
              <Breadcrumb
                className="d-none d-md-inline-block"
                listProps={{
                  className: "breadcrumb-dark breadcrumb-transparent",
                }}
              >
                <Breadcrumb.Item>
                  <FontAwesomeIcon icon={faHome} />
                </Breadcrumb.Item>
                <Breadcrumb.Item>Volt</Breadcrumb.Item>
                <Breadcrumb.Item active>Settings</Breadcrumb.Item>
              </Breadcrumb>
              <h4>Settings</h4>
              <p className="mb-0">Your web analytics dashboard template.</p>
            </div>
          </div>

          <Row>
            <Col xs={12} xl={8}>
              <GeneralInfoForm />
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12}>
                  <ProfileCardWidget />
                </Col>
                <Col xs={12}>
                  <ChoosePhotoWidget
                    title="Select profile photo"
                    photo={Profile}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </>
        <Footer />
      </main>
    </>
  );
}
