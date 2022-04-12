import React from 'react';
import './Pricing.css';
import Heading from '../components/Heading';
import Accordion from 'react-bootstrap/Accordion';


function Pricing() {
    return (
      <div className="pricing container">
          <Heading/>
          <h2>SERVICES</h2>
          <div className="services">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h3>Music Video - <u>$500/Day</u></h3></Accordion.Header>
                <Accordion.Body>
                  {window.innerWidth > 767 ?
                    <table className="music-video">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
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
                            <span>-The size of the project may require an increase of crew size of 3 to 4 people. Pricing for a 4 person crew is <u>$600/Day</u></span>
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
                          <h5>Whats Included?</h5>
                        </div>
                        <div className="responsive-description">
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
              <Accordion.Item eventKey="1">
                <Accordion.Header><h3>Short Film - <u>$700/Day</u></h3></Accordion.Header>
                <Accordion.Body>
                  {window.innerWidth > 767 ?
                    <table className="short-film">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Consists of a 6-person crew, camera and basic lighting included.</span>
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
                            <span>-Projects may have additional costs that MUST be covered by the client. (For EX: Locations, Car Rentals, Clothing, and Special Camera Gear Rentals.).</span>
                            <span>-The size of the project may require an increase of crew size of 6 to a maximum of 12 people. Every extra crew member is <u>$75 per day</u>, meaning a 12-person crew would cost <u>$1150</u>. (W/out editing)</span>
                            <span>-Some projects may only need a 4-person crew. That is typically not the case, but pricing for a 4 person crew is <u>$600/Day.</u> </span>
                            <span>-The pricing for any Short Film does not include the cost of an editor. You may choose an editor of your choice, or we have a network of editors we can choose based on styling and budget. Editing is priced at <u>$100</u> minimum per project, but can vary greatly depending on the editor and project complexity.</span>
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
                            <span>Director - <u>$75</u></span>
                            <span>DP - <u>$75</u></span>
                            <span>Lighting - <u>$100</u></span>
                            <span>Food- <u>$150</u></span>
                            <span>Company Fee - <u>$100</u></span>
                            <span>Intern - <u>$0</u></span>
                            <span className="extra-costs">*Potential Extra Costs*</span>
                            <span>PA - <u>$100</u></span>
                        </div>
                      </td>
                    </tr>
                  </table>
                  :
                  <div className="responsive-short-film">
                    <div className="responsive-money">
                        <div className="responsive-heading">
                          <h5>What's Included?</h5>
                        </div>
                        <div className="responsive-description">
                          <span>Consists of a 6-person crew, camera and basic lighting included.</span>
                        </div>
                    </div>
                    <div className="responsive-things-to-consider">
                        <div className="responsive-heading">
                          <h5>Things To Consider</h5>
                        </div>
                        <div className="responsive-description">
                          <ul>
                            <li>Projects may have additional costs that MUST be covered by the client. (For EX: Locations, Car Rentals, Clothing, and Special Camera Gear Rentals.).</li>
                            <li>The size of the project may require an increase of crew size of 6 to a maximum of 12 people. Every extra crew member is <u>$75 per day</u>, meaning a 12-person crew would cost <u>$1150</u>. (W/out editing)</li>
                            <li>Some projects may only need a 4-person crew. That is typically not the case, but pricing for a 4 person crew is <u>$600/Day.</u></li>
                            <li>The pricing for any Short Film does not include the cost of an editor. You may choose an editor of your choice, or we have a network of editors we can choose based on styling and budget. Editing is priced at <u>$100</u> minimum per project, but can vary greatly depending on the editor and project complexity.</li>
                          </ul>
                        </div>
                    </div>
                    <div className="responsive-cost-breakdown">
                        <div className="responsive-heading">
                          <h5>Cost Breakdown</h5>
                        </div>
                        <div className="responsive-description">
                        <span>Director - <u>$75</u></span>
                            <span>DP - <u>$75</u></span>
                            <span>Lighting - <u>$100</u></span>
                            <span>Food- <u>$150</u></span>
                            <span>Company Fee - <u>$100</u></span>
                            <span>Intern - <u>$0</u></span>
                            <span className="extra-costs">*Potential Extra Costs*</span>
                            <span>PA - <u>$100</u></span>
                        </div>
                    </div>
                  </div>

                }

                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header><h3>Commercial - <u>$125/Hr</u></h3></Accordion.Header>
                <Accordion.Body>
                  {window.innerWidth > 767 ?
                    <table className="commercial">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Consists of a 2-person crew, camera and basic lighting included.</span>
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
                            <span>-Pricing is PER hour. Every commercial is different and requires a different amount of setup time. Setup time is included in per hour cost.</span>
                            <span>-If a commercial goes longer than 4 hours a <u>$50</u> food charge will be added.</span>
                            <span>-If a commercial requires more than the base 2-person crew, it is <u>$50/hr</u> per additional crew member.</span>
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
                            <span>Director/DP - <u>$50/hr</u></span>
                            <span>Gaffer/PA - <u>$50/hr</u></span>
                            <span>Company Fee - <u>$25/hr</u></span>
                        </div>
                      </td>
                    </tr>
                  </table>
                  :
                  <div className="responsive-commercial">
                    <div className="responsive-money">
                        <div className="responsive-heading">
                          <h5>What's Included?</h5>
                        </div>
                        <div className="responsive-description">
                          <span>Consists of a 2-person crew, camera and basic lighting included.</span>
                        </div>
                    </div>
                    <div className="responsive-things-to-consider">
                        <div className="responsive-heading">
                          <h5>Things To Consider</h5>
                        </div>
                        <div className="responsive-description">
                          <ul>
                            <li>Pricing is PER hour. Every commercial is different and requires a different amount of setup time. Setup time is included in per hour cost.</li>
                            <li>If a commercial goes longer than 4 hours a <u>$50</u> food charge will be added.</li>
                            <li>If a commercial requires more than the base 2-person crew, it is <u>$50/hr</u> per additional crew member.</li>
                          </ul>
                        </div>
                    </div>
                    <div className="responsive-cost-breakdown">
                        <div className="responsive-heading">
                          <h5>Cost Breakdown</h5>
                        </div>
                        <div className="responsive-description">
                            <span>Director/DP - <u>$50/hr</u></span>
                            <span>Gaffer/PA - <u>$50/hr</u></span>
                            <span>Company Fee - <u>$25/hr</u></span>
                        </div>
                    </div>
                  </div>

                }

                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header><h3>Photoshoot - <u>$200/Project</u></h3></Accordion.Header>
                <Accordion.Body>
                  {window.innerWidth > 767 ?
                    <table className="photoshoot">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Consists of a 2-person crew, camera and basic lighting equipment included.</span>
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
                            <span>-Projects may have additional costs that MUST be covered by the client. (For EX: Locations like studio rentals, Car Rentals, Clothing, and Special Camera Gear Rentals.)</span>
                            <span>-Projects are limited to 3hrs. For every hour past 3 hours, it will be an extra $60/hr.</span>
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
                            <span>Photographer - <u>$75</u></span>
                            <span>Gaffer - <u>$75</u></span>
                            <span>Company Fee - <u>$50</u></span>
                        </div>
                      </td>
                    </tr>
                  </table>
                  :
                  <div className="responsive-photoshoot">
                    <div className="responsive-money">
                        <div className="responsive-heading">
                          <h5>What's Included?</h5>
                        </div>
                        <div className="responsive-description">
                          <span>Consists of a 2-person crew, camera and basic lighting equipment included.</span>
                        </div>
                    </div>
                    <div className="responsive-things-to-consider">
                        <div className="responsive-heading">
                          <h5>Things To Consider</h5>
                        </div>
                        <div className="responsive-description">
                          <ul>
                            <li>Projects may have additional costs that MUST be covered by the client. (For EX: Locations like studio rentals, Car Rentals, Clothing, and Special Camera Gear Rentals.)</li>
                            <li>Projects are limited to 3hrs. For every hour past 3 hours, it will be an extra $60/hr.</li>
                          </ul>
                        </div>
                    </div>
                    <div className="responsive-cost-breakdown">
                        <div className="responsive-heading">
                          <h5>Cost Breakdown</h5>
                        </div>
                        <div className="responsive-description">
                            <span>Photographer - <u>$75</u></span>
                            <span>Gaffer - <u>$75</u></span>
                            <span>Company Fee - <u>$50</u></span>
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
