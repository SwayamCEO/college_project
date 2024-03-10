import Link from 'next/link'
import React from 'react'

const Thead = () => {
  return (
    
                   <thead>
    <tr> <td align="center" colSpan={8} bgcolor="#FFF" height={70}> 
        <nav>
          <Link href="/tradeassess">
            <i className="fa fa-coffee " />
            <b>Sublimation</b>
          </Link>
          <Link href="/tradeassess_computer">
            <i className="fa fa-desktop" />
            <b>Computer</b>
          </Link>
          <Link href="/tradeassess_paperbag">
            <i className="fa fa-shopping-bag" />
            <b>PaperBag</b>
          </Link>
          <Link href="/tradeassess_photocopy">
            <i className="fa fa-camera" />
            <b>Photocopy</b>
          </Link>
          <Link href="/tradeassess_lamination">
            <i className="fa fa-print" />
            <b>Lamination</b>
          </Link>
          <Link href="/tradeassess_jewellery">
            <i className="fa fa-diamond" />
            <b>Jewellerry</b>
          </Link>
          <Link href="/tradeassess_softtoy">
            <i className="fa fa-child" />
            <b>Soft Toy</b>
          </Link>
          <Link href="/tradeassess_spiral">
            <i className="fa fa-paperclip" />
            <b>Spiral</b>
          </Link>
          <Link href="/tradeassess_doormat">
            <i className="fa-align-justify" />
            <b>doormat</b>
          </Link>
          <span />
        </nav>
      </td></tr></thead>  
  )
}

export default Thead