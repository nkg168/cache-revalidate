import { getCurrentTime } from "../lib";

export const CurrentTime = () => {
	return <p>{getCurrentTime()}</p>;
};
