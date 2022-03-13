import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
// ______________here you have to import css______________

function TableComponent() {
  const [addLanguage, setAddLanguage] = useState(1);

  const plusHandler = () => {
    setAddLanguage(addLanguage + 1);
  };

  const closeHandler = (index) => {
    setAddLanguage(addLanguage - 1);
  };

  return (
    <div>
      <form action="">
        <div class="table-responsive">
          <Table striped bordered hover className="text-center ">
            <thead>
              <tr>
                <th>
                  <span className="text-danger">*</span>FLT No.
                </th>
                <th>
                  <span className="text-danger">*</span>CLS
                </th>
                <th>
                  <span className="text-danger">*</span>Date
                </th>
                <th>
                  <span className="text-danger">*</span>DEP APO
                </th>
                <th>
                  <span className="text-danger">*</span>ARR APO
                </th>
                <th>
                  <span className="text-danger">*</span>ACTION CODE
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(Array(addLanguage)).map((c, index) => {
                return (
                  <tr>
                    <td>
                      <div>
                        <button
                          class="border-0 plus-icon "
                          type="button"
                          onClick={() => plusHandler()}
                        >
                          <GoPlus className="text-primary" />
                        </button>
                        <input type="checkbox" className="mx-2" />
                        <span>1</span>
                        <input type="text" className="w-25" />
                        <button type="button" className="search-button">
                          <BiSearchAlt />
                        </button>
                        <input type="text" className="w-25" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <input type="text" className="w-25" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <input type="text" className="w-25" />
                        <input type="date" className="w-25" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <input type="text" className="w-25" />
                        <input type="search" className="w-25" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>HANEDA/T</span>
                        <input type="text" className="w-25" />
                        <input type="search" className="w-25" />
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>FRANKFUR</span>
                        <input type="text" className="w-25 mx-2" />
                        <button
                          class="border-0 close-icon"
                          type="button"
                          onClick={() => closeHandler(index)}
                        >
                          <IoMdClose className="text-danger " />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </form>
    </div>
  );
}

export default TableComponent;
