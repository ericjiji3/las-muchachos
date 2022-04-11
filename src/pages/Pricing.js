import React from 'react';
import './Pricing.css';
import Heading from '../components/Heading';
import Accordion from 'react-bootstrap/Accordion';


function Pricing() {
    return (
      <div className="pricing container">
          <Heading/>
          <h4>SERVICES</h4>
          <div className="services">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header><h4>Music Video</h4></Accordion.Header>
                <Accordion.Body>
                  {window.innerWidth > 767 ?
                    <table className="music-video">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5 className="d-block">$/X</h5>
                          <h5>(Prices below are MINIMUMS)</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span className="d-block"><u>$500/Day</u></span>
                          <span>Consists of a 3-person crew, an intern, camera and basic lighting included.</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="things-to-consider">
                      <th>
                        <div className="table-heading">
                          <h5>Things To Consider</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                            <span>-Projects have additional costs that MUST be covered by the artist. (For EX: Locations, Car Rentals, Clothing, and Special Camera Gear Rentals.).</span>
                            <span>-The size of the project may require an increase of crew size of 3 to 4 people. Pricing for a 4 person crew is $600/Day</span>
                            <span>-The pricing for any Music Video does not include the cost of an editor. You may choose an editor of your choice, or we have a network of editors we can choose based on styling and budget. Editing is priced at $100 minimum per project, but can vary greatly depending on the editor and project complexity.</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="cost-breakdown">
                      <th>
                        <div className="table-heading">
                          <h5>Cost Breakdown</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                            <span>Director - <u>$100</u></span>
                            <span>DP - <u>$100</u></span>
                            <span>Lighting - <u>$100</u></span>
                            <span>Food- <u>$100</u></span>
                            <span>Company Fee - <u>$100</u></span>
                            <span>Intern - <u>$0</u></span>
                            <span className="extra-costs">*Potential Extra Costs*</span>
                            <span>PA - <u>$100</u></span>
                        </div>
                      </td>
                    </tr>
                  </table>
                  :
                  <div className="responsive-music-video">
                    <div className="responsive-money">
                        <div className="responsive-heading">
                          <h5>$/X</h5>
                          <h5>(Prices below are MINIMUMS)</h5>
                        </div>
                        <div className="responsive-description">
                          <span className="d-block"><u>$500/Day</u></span>
                          <span>Consists of a 3-person crew, an intern, camera and basic lighting included.</span>
                        </div>
                    </div>
                    <div className="responsive-things-to-consider">
                        <div className="responsive-heading">
                          <h5>Things To Consider</h5>
                        </div>
                        <div className="responsive-description">
                          <ul>
                            <li>Projects have additional costs that MUST be covered by the artist. (For EX: Locations, Car Rentals, Clothing, and Special Camera Gear Rentals.).</li>
                            <li>The size of the project may require an increase of crew size of 3 to 4 people. Pricing for a 4 person crew is $600/Day</li>
                            <li>The pricing for any Music Video does not include the cost of an editor. You may choose an editor of your choice, or we have a network of editors we can choose based on styling and budget. Editing is priced at $100 minimum per project, but can vary greatly depending on the editor and project complexity.</li>
                          </ul>
                        </div>
                    </div>
                    <div className="responsive-cost-breakdown">
                        <div className="responsive-heading">
                          <h5>Cost Breakdown</h5>
                        </div>
                        <div className="responsive-description">
                            <span>Director - <u>$100</u></span>
                            <span>DP - <u>$100</u></span>
                            <span>Lighting - <u>$100</u></span>
                            <span>Food- <u>$100</u></span>
                            <span>Company Fee - <u>$100</u></span>
                            <span>Intern - <u>$0</u></span>
                            <span className="exdiva-costs">*Potential Extra Costs*</span>
                            <span>PA - <u>$100</u></span>
                        </div>
                    </div>
                  </div>
                  
                
                }
                
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
      </div>
  
    );
}

export default Pricing;
