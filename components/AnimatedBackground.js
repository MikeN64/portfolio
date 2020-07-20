import styles from "./animated_background.module.css"

const AnimatedBackground = ({children}) => {
	return (
		<div className={styles.wrapper}>
			<div>{children}</div>
			<div className={styles.box}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default AnimatedBackground;