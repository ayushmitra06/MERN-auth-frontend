import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./styles.module.css";

const Loader = () => {
	return (
		<div className={styles.loader}>
			<ClipLoader size={50} color={"#3bb19b"} />
		</div>
	);
};

export default Loader;
