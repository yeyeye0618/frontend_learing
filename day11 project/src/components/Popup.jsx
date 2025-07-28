import styles from "./Popup.module.css";

const Popup = ({ trigger, setTrigger }) => {
	return trigger ? (
		<div className={styles.popup}>
			<div className={styles.popupInner}>
				<button className={styles.closebtn} onClick={() => setTrigger(false)}>
					X
				</button>
				<h2>Popup Component</h2>
			</div>
		</div>
	) : (
		""
	);
};

export default Popup;
