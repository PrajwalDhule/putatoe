import React from "react";

const Services = (props) => {
  return (
    <div className="services-body">
      {props.services.map((service) => {
        return (
          <div className="services-item">
            <div className="text">
              <div>{service.title}</div>
              <div className="">
                {service.items.map((item) => {
                  return (
                    <>
                      <p>{item}</p>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="gradient"></div>
            <div className="img">
              <img src={service.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
