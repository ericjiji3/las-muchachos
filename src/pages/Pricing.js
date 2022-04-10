import React from 'react';
import './Pricing.css';
import Heading from '../components/Heading';
import Accordion from 'react-bootstrap/Accordion';


function Pricing() {
    return (
      <div className="pricing container">
          <Heading/>
          <div className="services">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Music Video</Accordion.Header>
                <Accordion.Body>
                  <table className="table">
                    <tr className="table-heading">
                      <th className="price"><h4><b>$/X</b> (Prices below are MINIMUMS)</h4></th>
                      <th className="consider"><b>Things To Consider</b></th>
                      <th className="breakdown"><b>Cost Breakdown</b></th>
                    </tr>
                    <tr className="table-content">
                      <th>
                        <span className="dollars-day"><b>$500/Day</b></span>
                        <span>Consists of a 3-person crew, an intern, camera and basic lighting included.</span>
                      </th>
                      <th>
                        <ul className='consider-list'>
                          <li>Projects have additional costs that MUST be covered by the artist. (For EX: Locations, Car Rentals, Clothing, and Special Camera Gear Rentals.).</li>
                          <li>The size of the project may require an increase of crew size of 3 to 4 people. Pricing for a 4 person crew is $600/Day</li>
                          <li>The pricing for any Music Video does not include the cost of an editor. You may choose an editor of your choice, or we have a network of editors we can choose based on styling and budget. Editing is priced at $100 minimum per project, but can vary greatly depending on the editor and project complexity.</li>
                        </ul>
                      </th>
                      <th>
                        <ul className='cost-breakdown-list'>
                          <li>Director - $100</li>
                          <li>DP - $100</li>
                          <li>Lighting - $100</li>
                          <li>Food - $100</li>
                          <li>Company Fee - $100</li>
                          <li>Intern - $0</li>
                        </ul>
                        <span><b>Potential Extra Costs</b></span>
                        <ul>
                          <li>PA - $100</li>
                        </ul>
                      </th>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Short Film</Accordion.Header>
                <Accordion.Body>
                  fadadsfadfa
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Commercial</Accordion.Header>
                <Accordion.Body>
                  fadadsfadfa
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Photoshoot</Accordion.Header>
                <Accordion.Body>
                  fadadsfadfa
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
      </div>
  
    );
}

export default Pricing;
