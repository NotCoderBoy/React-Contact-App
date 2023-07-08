import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import {
  CounterWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
} from "../../widgets/Widgets";
import { PageVisitsTable } from "../../widgets/Tables";

// components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

export default function Dashboard() {
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

        <Row className="justify-content-md-center mt-3">
          <Col xs={12} sm={6} xl={4} className="mb-4">
            <CounterWidget
              category="Customers"
              title="345k"
              period="Feb 1 - Apr 1"
              percentage={18.2}
              icon={faChartLine}
              iconColor="shape-secondary"
            />
          </Col>

          <Col xs={12} sm={6} xl={4} className="mb-4">
            <CounterWidget
              category="Customers"
              title="345k"
              period="Feb 1 - Apr 1"
              percentage={18.2}
              icon={faChartLine}
              iconColor="shape-secondary"
            />
          </Col>

          <Col xs={12} sm={6} xl={4} className="mb-4">
            <CounterWidget
              category="Revenue"
              title="$43,594"
              period="Feb 1 - Apr 1"
              percentage={28.4}
              icon={faCashRegister}
              iconColor="shape-tertiary"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} xl={12} className="mb-4">
            <Row>
              <Col xs={12} xl={12} lg={12} className="mb-4">
                <PageVisitsTable />
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6} className="mb-4">
                <TeamMembersWidget />
              </Col>

              <Col xs={12} lg={6} className="mb-4">
                <ProgressTrackWidget />
              </Col>
            </Row>
          </Col>
        </Row>

        <Footer />
      </main>
    </>
  );
}
