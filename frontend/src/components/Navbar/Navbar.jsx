import { useNavigate, useLocation } from 'react-router-dom'
import { useUI } from '../../context/UIContext'
import { useMascota } from '../../context/MascotaContext'
import { MdHome, MdChat, MdSmartToy, MdOutlineMonitorWeight, MdPerson } from 'react-icons/md'
import { PiChefHatLight, PiStethoscopeDuotone } from "react-icons/pi";
import { GiWeightScale, GiDogBowl } from "react-icons/gi"
import { BsWechat } from "react-icons/bs";
import { CiHospital1 } from 'react-icons/ci'
import styles from './Navbar.module.css'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setPesoModal } = useUI()
  const { mascotaActiva } = useMascota()

  return (
    <nav className={styles.navbar}>
      <button
        className={`${styles.navItem} ${location.pathname === '/home' ? styles.active : ''}`}
        onClick={() => navigate('/home')}>
        <MdHome className={styles.navIcon} />
      </button>
      <button
        className={`${styles.navItem} ${location.pathname === '/chat' ? styles.active : ''}`}
        onClick={() => navigate('/chat')}>
        <BsWechat className={styles.navIcon} />
      </button>
      <button
        className={`${styles.navItem} ${mascotaActiva && location.pathname === `/menus/${mascotaActiva.id}` ? styles.active : ''}`}
        onClick={() => mascotaActiva && navigate(`/menus/${mascotaActiva.id}`)}
        disabled={!mascotaActiva}>
        <GiDogBowl className={styles.navIcon} />
      </button>
      <button
        className={styles.navItem}
        onClick={() => setPesoModal(true)}
        disabled={!mascotaActiva}>
        <GiWeightScale className={styles.navIcon} />
      </button>
      <button
        className={`${styles.navItem} ${mascotaActiva && location.pathname === `/historial/${mascotaActiva.id}` ? styles.active : ''}`}
        onClick={() => mascotaActiva && navigate(`/historial/${mascotaActiva.id}`)}
        disabled={!mascotaActiva}>
        <PiStethoscopeDuotone className={styles.navIcon} />
      </button>
      <button
        className={`${styles.navItem} ${location.pathname === '/profile' ? styles.active : ''}`}
        onClick={() => navigate('/profile')}>
        <MdPerson className={styles.navIcon} />
      </button>
    </nav>
  )
}