import React from "react";
import { Table } from "reactstrap";
import axios from "axios";
class UserTable extends React.Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <h3>Male</h3>
        <Table>
          <thead>
            <tr>
              <th>Nationality</th>
              <th>30</th>
              <th>50</th>
              <th>50+</th>
            </tr>
          </thead>
          <tbody>
            {this.props.maleusers.map((user) => {
              return ([
                user.first.map((firs) => {
                  return (
                    <tr>
                      <td>{firs._id}</td>
                      <td>{firs.count}</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  );
                }),
                user.second.map((firs) => {
                  return (
                    <tr>
                      <td>{firs._id}</td>
                      <td>0</td>
                      <td>{firs.count}</td>
                      <td>0</td>
                    </tr>
                  );
                }), user.third.map((firs) => {
                  return (
                    <tr>
                      <td>{firs._id}</td>
                      <td>0</td>
                      <td>0</td>
                      <td>{firs.count}</td>
                    </tr>
                  );
                })

              ]);
            })}
          </tbody>
        </Table>
        <h3>Female</h3>
        <Table>
          <thead>
            <tr>
              <th>Nationality</th>
              <th>30</th>
              <th>50</th>
              <th>50+</th>
            </tr>
          </thead>
          <tbody>
            {this.props.femaleusers.map((user) => {
              return ([
                user.first.map((firs) => {
                  return (
                    <tr>
                      <td>{firs._id}</td>
                      <td>{firs.count}</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  );
                }),
                user.second.map((firs) => {
                  return (
                    <tr>
                      <td>{firs._id}</td>
                      <td>0</td>
                      <td>{firs.count}</td>
                      <td>0</td>
                    </tr>
                  );
                }), user.third.map((firs) => {
                  return (
                    <tr>
                      <td>{firs._id}</td>
                      <td>0</td>
                      <td>0</td>
                      <td>{firs.count}</td>
                    </tr>
                  );
                })

              ]);
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default UserTable;
