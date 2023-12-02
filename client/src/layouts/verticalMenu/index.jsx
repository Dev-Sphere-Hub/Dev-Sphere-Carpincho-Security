import React from 'react'
import { BiRedo, BiSolidTruck, BiSolidTimeFive, BiSolidReport } from 'react-icons/bi'

const VerticalMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <button>
            <BiRedo />
          </button>
        </li>
        <li>
          <button>
            <BiSolidTruck />
          </button>
        </li>
        <li>
          <button>
            <BiSolidTimeFive />
          </button>
        </li>
        <li>
          <button>
            <BiSolidReport />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default VerticalMenu
