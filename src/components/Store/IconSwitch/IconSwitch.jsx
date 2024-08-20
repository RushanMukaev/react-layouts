import styles from './iconSwitch.module.css'

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <>
        <span onClick={onSwitch} className="material-icons" >
            {icon}
        </span>
    </>
  )
}
