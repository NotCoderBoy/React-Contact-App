import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
  Card,
} from "@themesberg/react-bootstrap";
import Table from "react-bootstrap-table-next";
import Pagination from "react-bootstrap-table2-paginator";
import * as Paginator from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import entries from "../../jobs";

import { ContactTable } from "../../widgets/Tables";

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
  const columns = [
    { dataField: "id", text: "ID", hidden: true },
    { dataField: "name", text: "Name" },
    { dataField: "position", text: "Position" },
    { dataField: "office", text: "Office" },
    { dataField: "age", text: "Age" },
    { dataField: "startDate", text: "Start date" },
    {
      dataField: "salary",
      text: "Salary",
      formatter: (cell) => <span>${cell}</span>,
    },
  ];

  const customTotal = (from, to, size) => (
    <div>
      Showing {from} to {to} of {size} entries
    </div>
  );

  const customSizePerPage = (props) => {
    const { options, currentSizePerPage, onSizePerPageChange } = props;

    const onPageChange = (e) => {
      const page = e.target.value;
      onSizePerPageChange(page);
    };

    return (
      <Row>
        <Col xs="auto">
          <Form.Select
            value={currentSizePerPage}
            onChange={onPageChange}
            className="pe-5"
          >
            {options.map((o) => (
              <option key={o.page} value={o.page}>
                {o.text}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          entries per page
        </Col>
      </Row>
    );
  };

  render(
    <ToolkitProvider
      keyField="id"
      search={true}
      columns={columns}
      data={entries}
      wrapperClasses="table-responsive"
    >
      {({ baseProps, searchProps }) => (
        <Paginator.PaginationProvider
          pagination={Pagination({
            custom: true,
            showTotal: true,
            alwaysShowAllBtns: true,
            totalSize: entries.length,
            paginationTotalRenderer: customTotal,
            sizePerPageRenderer: customSizePerPage,
          })}
        >
          {({ paginationProps, paginationTableProps }) => (
            <Card>
              <div className="table-responsive py-2">
                <Card.Header>
                  <Row>
                    <Col xs={12} md={6} className="py-1">
                      <Paginator.SizePerPageDropdownStandalone
                        {...paginationProps}
                      />
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className="d-flex justify-content-md-end py-1"
                    >
                      <Search.SearchBar {...searchProps} />
                    </Col>
                  </Row>
                </Card.Header>

                <Table
                  {...baseProps}
                  {...paginationTableProps}
                  bodyClasses="border-0"
                  rowClasses="border-bottom"
                  classes="table-flush dataTable-table"
                />

                <Card.Footer>
                  <Row>
                    <Col
                      xs={12}
                      md={6}
                      className="d-flex align-items-center py-1"
                    >
                      <Paginator.PaginationTotalStandalone
                        {...paginationProps}
                      />
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className="d-flex justify-content-md-end align-items-center mb-0 py-1"
                    >
                      <Paginator.PaginationListStandalone
                        {...paginationProps}
                      />
                    </Col>
                  </Row>
                </Card.Footer>
              </div>
            </Card>
          )}
        </Paginator.PaginationProvider>
      )}
    </ToolkitProvider>
  );
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

          <div className="table-settings mb-4">
            <Row className="justify-content-between align-items-center">
              <Col xs={8} md={6} lg={3} xl={4}>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Col>
              <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle
                    split
                    as={Button}
                    variant="link"
                    className="text-dark m-0 p-0"
                  >
                    <span className="icon icon-sm icon-gray">
                      <FontAwesomeIcon icon={faCog} />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">
                      Show
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                      10{" "}
                      <span className="icon icon-small ms-auto">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>

          <ContactTable />
        </>
        <Footer />
      </main>
    </>
  );
}
