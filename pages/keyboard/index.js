import React from 'react'
import {Row, Col} from 'react-bootstrap'
import KeyboardBtn from '../../components/KeyboardBtns'

const index = () => {
    return (
        <div style={{padding: '100px'}}>
              <Row className="justify-content-center">
            <div
              style={{
                backgroundColor: 'red',
                maxWidth: "1200px",
                padding: "35px",
                borderRadius: "10px",
                marginTop: "25px",
              }}
            >
              <Row style={{ marginTop: "8px" }}>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"Q"} />
                </Col>

                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"W"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"E"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"R"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"T"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"Y"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"U"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"I"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"O"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  {" "}
                  <KeyboardBtn keyValue={"P"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn
                    keyValue={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                        style={{ backgroundColor: 'blue' }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                    }
                    action={"remove"}
                    style={{ backgroundColor: 'brown' }}
                  />
                </Col>
              </Row>

              <Row
                style={{
                  marginTop: "8px",
                  paddingLeft: "32px",
                  paddingRight: "32px",
                }}
                className="text-center"
              >
                <Col style={{  marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"A"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"S"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"D"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"F"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"G"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"H"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"J"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"K"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"L"} />
                </Col>
              </Row>

              <Row
                style={{
                  marginTop: "8px",
                  paddingLeft: "64px",
                  paddingRight: "64px",
                }}
              >
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"Z"} />
                </Col>

                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"X"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"C"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"V"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"B"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"N"} />
                </Col>
                <Col style={{ padding: "0px", marginRight: "5px", backgroundColor: 'yellow', cursor: 'pointer'}} className='pt-2'>
                  <KeyboardBtn keyValue={"M"} />
                </Col>
              </Row>
            </div>
          </Row>
        </div>
    )
}

export default index
