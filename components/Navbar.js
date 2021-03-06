import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
// import { AiFillShop } from 'react-icons/ai'


const NavBar = () => {
  return (
    <>

      <Navbar expand="lg" style={{ backgroundColor: "#fff" }}>
        <div className='container'>
          <Link href="/">
            <Navbar.Brand className="my-3" style={{cursor: 'pointer'}}>

              <Image src="/logo-kaizen.png" alt="me" width="156,6" height="48" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/blog"><a className="nav-link">Blog</a></Link>
              <Link href="/unidades"><a className="nav-link">Unidades</a></Link>
              <Link href="/fornecedores"><a className="nav-link">Fornecedores</a></Link>
              <Link href="/sac"><a className="nav-link">SAC</a></Link>
              <Link href="https://www.loja.kaizenautopecas.com.br/"><a className="nav-link" target='_blank'>Loja Online</a></Link>
              <NavDropdown title="Catálogos" id="basic-nav-dropdown" style={{ color: '#fff' }}>
                <NavDropdown.Item >Elétrica</NavDropdown.Item>
                <NavDropdown.Item >Óleos</NavDropdown.Item>
                <NavDropdown.Item >Mecânica</NavDropdown.Item>
                <NavDropdown.Divider />
                <a href="https://drive.google.com/file/d/1s3f_HNw0pK2J5SNq-fayciRl-WzN4n3w/view" target='_blank' style={{marginLeft: "8px"}}>Catálogo Completo</a>                
              </NavDropdown>
              
              </Nav>
              
            
            
          
          </Navbar.Collapse>
          <a href="https://www.instagram.com/casa.kaizen/" target='_blank' style={{ borderRadius: "2px" }}><AiFillInstagram className="m-1" style={{ width: "50px", height: "40px", }}/></a>
              {/* <a href="https://kaizenautopecas.mercadoshops.com.br/" target='_blank' style={{ borderRadius: "2px" }}><AiFillShop className="m-1" style={{ width: "50px", height: "40px", }}/></a> */}
              <a href="https://api.whatsapp.com/send/?phone=556183660828&text=Ol%C3%A1%2C+eu+gostaria+de+um+or%C3%A7amento.&app_absent=0" target='_blank' className="btn ml-auto" style={{ borderRadius: "2px" }}>
                <button type="button" className="btn btn-primary my-3"><AiOutlineWhatsApp className="m-1" />SOLICITAR ORÇAMENTO</button>
             
              </a >
        </div>        
      </Navbar>
    </>
  )

}

export default NavBar
