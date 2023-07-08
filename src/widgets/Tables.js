import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap-table-next";
import Pagination from "react-bootstrap-table2-paginator";
import * as Paginator from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  Table as Tab,
} from "@themesberg/react-bootstrap";

//data
import { pageVisits } from "./data/tables";
import entries from "./data/contacts";

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>${returnValue}</td>
        <td>
          <FontAwesomeIcon
            icon={bounceIcon}
            className={`${bounceTxtColor} me-3`}
          />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Page visits</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">
              See all
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Tab responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Page name</th>
            <th scope="col">Page Views</th>
            <th scope="col">Page Value</th>
            <th scope="col">Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Tab>
    </Card>
  );
};

export const ContactTable = () => {
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
  return (
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
};
