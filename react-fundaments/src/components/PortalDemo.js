import React from 'react'

// 2º step import the ReactDOM in the component that will created out of the root div
import  ReactDOM  from 'react-dom'
/**
 * Portals let us to create components tha aren't in the root div
 * inpect to see the component out of the root div
 * Why do wee need portasl?? one of the uses cases is when have to deal with apparent components CSS when that child component is a modal a pop-up or a tooltip
 * events fired inside a portal will propagate to ancestors, a portal behaves like a normal react child
 */

export default function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>
        Portal Demo
    </h1>,
    document.getElementById('portal-root')
  )
}
