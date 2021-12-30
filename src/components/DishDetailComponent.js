/*Presentational components/Completely Controlled components/State-less Components: 
mainly concerned with rendering the "view"
Depends on the properties passed from the parent component 
they do not maintain their own state(no local state)
Such components are also called Controlled Components.
DishDetailComponent is an example of such component.
*/
/*Container Components/StateFull Component:
components used for making things work like fetching, state updates etc. 
make use of presentational components and pass properties etc.
*/
import React, { Fragment } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function DishDetailComponent({ selDish }) {
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-5 col-sm-5 m-1">
          <Card>
            <CardImg top src={selDish.image} alt={selDish.name} />
            <CardBody>
              <CardTitle tag="h5">{selDish.name}</CardTitle>
              <CardText>{selDish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div
          className="col-xs-12 col-md-5 col-sm-5 m-1"
          style={{ border: "none" }}
        >
          <CardTitle tag="h3">Comments</CardTitle>
          {selDish.comments.map((comment) => {
            const date = comment.date.split("T")[0];
            const [yy, mon, dd] = date.split("-");
            return (
              <Fragment key={comment.id}>
                <CardText>{comment.comment}</CardText>
                <CardText style={{ marginTop: -20 }}>
                  --{comment.author}, {months[mon]} {dd}, {yy}
                </CardText>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DishDetailComponent;
