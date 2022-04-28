import React, { useState, useEffect } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import Link from 'next/link'

import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../src/lib/utils'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thak you for your order!</h2>
        <p className="email-msg">Check you e-mail inbox for the receipt</p>
        <p className="description">
          If you have any questions, please email
          <a href="mailto:marcos1968@gmail.com" className="email">
            marcos1968@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
