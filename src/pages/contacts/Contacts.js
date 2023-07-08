import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup, Breadcrumb } from "@themesberg/react-bootstrap";

import { ContactTable } from "../../widgets/Tables";

// components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

export default function Contacts() {
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
                <Breadcrumb.Item>App</Breadcrumb.Item>
                <Breadcrumb.Item active>Contacts</Breadcrumb.Item>
              </Breadcrumb>
              <h4>Contacts</h4>
              <p className="mb-0">Your web analytics dashboard template.</p>
            </div>
            <div className="btn-toolbar mb-2 mb-md-0">
              <ButtonGroup>
                <Button variant="outline-primary" size="sm">
                  Share
                </Button>
                <Button variant="outline-primary" size="sm">
                  Export
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <ContactTable />
        </>
        <Footer />
      </main>
    </>
  );
}
