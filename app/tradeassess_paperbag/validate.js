import React from 'react'

const Validate = () => {
  return (
        <table className="suggest">
                      <tbody>
                        <tr>
                          <td colSpan={6} width={599}>
                            <p>Validate Suggestion</p>
                          </td>
                        </tr>
                        <tr>
                          <td width={172}>
                            <p>&nbsp;</p>
                          </td>
                          <td width={52}>
                            <p>Out of</p>
                          </td>
                          <td width={75}>
                            <p>Theory</p>
                          </td>
                          <td width={104}>
                            <p>Skills Practical</p>
                          </td>
                          <td width={52}>
                            <p>Total</p>
                          </td>
                          <td width={144}>
                            <p>Recognition</p>
                          </td>
                        </tr>
                        <tr>
                          <td width={172}>
                            <p>GRAND TOTAL</p>
                          </td>
                          <td width={52}>
                            <p>500</p>
                          </td>
                          <td width={75}>
                            <p>150</p>
                          </td>
                          <td width={104}>
                            <p>350</p>
                          </td>
                          <td width={52}>
                          </td>
                          <td rowSpan={3} width={144}>
                            <p>&nbsp;</p>
                            <p>Approved</p>
                          </td>
                        </tr>
                        <tr>
                          <td width={172}>
                            <p>PERCENTAGE WEIGHT AGE</p>
                          </td>
                          <td width={52}>
                            <p>&nbsp;</p>
                          </td>
                          <td width={75}>
                            <p>30%</p>
                          </td>
                          <td width={104}>
                            <p>70%</p>
                          </td>
                          <td width={52}>
                            <p>&nbsp;</p>
                          </td>
                        </tr>
                        <tr>
                          <td width={172}>
                            <p>STATUS</p>
                          </td>
                          <td width={52}>
                            <p>&nbsp;</p>
                          </td>
                          <td width={75}>
                            <p>Pass</p>
                          </td>
                          <td width={104}>
                            <p>Pass</p>
                          </td>
                          <td width={52}>
                            <p>Pass</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={6} width={599}>
                            <p>General Information</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={6} width={599}>
                            <center>
                              <table className="criteria" width={135}>
                                <tbody>
                                  <tr>
                                    <td bgcolor="red" width={100}>
                                      <p>Below 30%</p>
                                    </td>
                                    <td bgcolor="red" width={235}>
                                      <p>needs exclusive training</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td bgcolor="yellow" width={100}>
                                      <p>30%- 60%</p>
                                    </td>
                                    <td bgcolor="yellow" width={235}>
                                      <p>needs concurrent training</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td bgcolor="orange" width={100}>
                                      <p>60%- 80%</p>
                                    </td>
                                    <td bgcolor="orange" width={235}>
                                      <p>concurrent training along with other training</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td bgcolor="green" width={100}>
                                      <p>above&nbsp; 80%</p>
                                    </td>
                                    <td bgcolor="green" width={235}>
                                      <p>promoted for skill training</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </center>    
                          </td>
                        </tr>
                      </tbody>
                    </table>
    
  )
}

export default Validate