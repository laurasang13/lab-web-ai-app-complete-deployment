import { useTratamientosAlert } from '../../hooks/useTratamientosAlert'
import { GiMedicines, GiMedicinePills } from "react-icons/gi";
import styles from './TratamientoAlert.module.css'

function getTexto(tratamiento, nombreMascota) {
  const { nombre, diasRestantes } = tratamiento
  if (diasRestantes < 0) return `¡Atrasado! Tratamiento: ${nombre} de ${nombreMascota} lleva ${Math.abs(diasRestantes)} días pendiente`
  if (diasRestantes === 0) return `Tratamiento: ${nombre} de ${nombreMascota} — ¡hoy toca administrarlo!`
  if (diasRestantes === 1) return `Tratamiento: ${nombre} de ${nombreMascota} — vence mañana`
  return `Tratamiento: ${nombre} de ${nombreMascota} — vence en ${diasRestantes} días`
}

export default function TratamientoAlert({ mascotaId, nombreMascota }) {
  const { alertas } = useTratamientosAlert(mascotaId)

  if (!alertas.length) return null

  return (
    <div className={styles.wrapper}>
      {alertas.map(t => (
        <div
          key={t.id}
          className={`${styles.banner} ${t.diasRestantes < 0 ? styles.danger : styles.warning}`}
        >
          <GiMedicines className={styles.pillIcon} />
          <span className={styles.msg}>{getTexto(t, nombreMascota)}</span>
        </div>
      ))}
    </div>
  )
}
