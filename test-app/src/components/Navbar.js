import React from 'react'
import { Card, Button, Alert, Container, Row, Col, Nav } from 'react-bootstrap'

export default function Navbar() {
    return (
        <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Dashboard</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Add Course</Nav.Link>
  </Nav.Item>
  
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Only Teachers Can Hit This, idk How To Get That To Enable This
    </Nav.Link>
  </Nav.Item>
</Nav>
    )
}
