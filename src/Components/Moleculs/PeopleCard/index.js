import React from 'react';
import Button from '../../Atoms/Button';
import anime from 'animejs'

function PeopleCard(props) {

  function SexAvatar(sex) {
    if (sex === 'female') {
      return (
        "url('female1.svg')"
      )
    }
    return (
      "url('male1.svg')"
    )
  }

  let Avatar = {
    backgroundImage: SexAvatar(props.sex),
  }

  return(
    <div className="dib br1 ba b--black-10 bg-white relative" style={Style.Card}>
      <div className="CardImg">
        <div className="aspect-ratio aspect-ratio--1x1">
          <div className="aspect-ratio--object cover bg-orange"
            style={Avatar}>

            </div>
        </div>
      </div>
      <div className="CardContent pa2 relative">
        <div className="flex items-center">
          <div className="w-80">
            <h2 className="truncate f5 mb1">{props.fullName}</h2>
            <p className="f7 gray">{props.Nik}</p>
          </div>
          <div className="CardAction ml2 w-20 relative">
            <button style={Style.ButtonSize}/>
            <div className="dn position absolute left-0 top-0 w4 pa2 bg-white shadow-1">
              <ul>
                <li className="">
                  <a href="" className="db pa2 link black">Edit</a>
                </li>
                <li className="">
                  <a href="" className="db pa2 link black">Hapus</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const Style={
  Card: {
    width: 160,
    borderSize: '1px',
  },
  ButtonSize: {
    border: 0,
    width: 24,
    height: 24,
    padding: 0,
    display: 'block',
    borderRadius: 0,
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0OHY0OGgtNDh6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTI0IDE2YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCA0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCAxMmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6Ii8+PC9zdmc+)",
  },
  moreMenu: {

  }
}

// data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0OHY0OGgtNDh6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTI0IDE2YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCA0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCAxMmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6Ii8+PC9zdmc+
export default PeopleCard
