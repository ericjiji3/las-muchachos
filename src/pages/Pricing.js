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
          <div className="rentals mt-5">
          <h2>RENTALS</h2>
          <h3 className="rental-cameras">Cameras</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h3>Canon R5 - <u>$60/Day</u> OR <u>$150/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-r5">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Includes an EF-RF Adapter (W/ Control Ring) and small-tote bag.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h3>Canon 5D Mark II - <u>$25/Day/Weekend</u> OR <u>$60/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-5d">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Small-tote bag included.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><h3>Canon 5D Mark II - <u>$25/Day/Weekend</u> OR <u>$60/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-5d">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Small-tote bag included.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              <div className="rental-lenses">
                <h3>Lenses</h3>
                <h4>*All lenses have front and rear caps. Comes with Pelican Carrying case*</h4>
                <h5>Canon EF 50mm f/1.8 II Lens - <u>$10/Day/Weekend</u> OR <u>$25/7 Days</u></h5>
                <h5>Canon EF 85mm f/1.8 USM - <u>$10/Day/Weekend</u> OR <u>$25/7 Days</u></h5>
                <h5>Canon EF 24-105mm f/4 L IS USM - <u>$20/Day/Weekend</u> OR <u>$40/7 Days</u></h5>
                <h5>Canon EF Set (50mm, 85mm, 24-105mm) - <u>$30/Day/Weekend</u> OR <u>$70/7 Days</u></h5>
              </div>
            <h3>Camera Accessories</h3>
              <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header><h3>Ninja V Recorder - <u>$20/Day/Weekend</u> OR <u>$50/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-ef-50">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Comes with carrying case, HDMI to mini-HDMI cable, 4 batteries, an extra two-slot charger, a cold shoe monitor mount, and a screen visor. 500gb Mini AtomX SSD (usb-c adapter included) is available as an add-on for $5/Day/Wknd or $20/7Days.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h3>Libec TH-X Head and Tripod System - <u>$10/Day/Weekend</u> OR <u>$30/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-ef-85">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Comes with tripod carrying bag and tripod plate mount. Cheeseplate available upon request.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><h3>EF-RF Adapter W/ Control Ring - <u>Available upon request.</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-ef-105">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Small soft case included. Adapter comes with front and rear caps.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><h3>SmallRig Camera Tripod Mounting Baseplate w/15mm Rod Clamp Rail Block - <u>$7.50/Day/Weekend</u> OR <u>$20/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-ef-105">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>Rails and Lens Support included.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header><h3>Sandisk 128GB CF2.0 Type B - <u>$10/Day/Weekend</u> OR <u>$30/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-ef-105">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>USB-C Adapter available upon request, but dependent on availability.</span>
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
                            <span>-Required to shoot 8k internally with the Canon R5.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header><h3>ProMaster 128GB CF2.0 Type B - <u>$10/Day/Weekend</u> OR <u>$30/7 Days</u></h3></Accordion.Header>
                <Accordion.Body>
                    <table className="canon-ef-105">
                    <tr className="money">
                      <th>
                        <div className="table-heading">
                          <h5>Whats Included?</h5>
                        </div>
                      </th>
                      <td>
                        <div className="description">
                          <span>USB-C Adapter available upon request, but dependent on availability.</span>
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
                            <span>-Required to shoot 8k internally with the Canon R5.</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h3>Lighting Accessories</h3>
            <h5>C-Stand - <u>$6/Day/Weekend</u> OR <u>$21/7 Days</u></h5>
            <h5>Flag Kit - <u>$10/Day/Weekend</u> OR <u>$35/7 Days</u></h5>
          </div>
      </div>
  
    );
}

export default Pricing;
