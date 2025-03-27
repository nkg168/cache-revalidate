import { getCurrentTimeAsync } from "@/lib";
import { CurrentTime } from "./current-time";

const getData = async () => {
	const result = await getCurrentTimeAsync();
	console.log(`${result} getData`);
	return result;
};

export const ResultNoCache = async () => {
	const result = await getData();
	return (
		<>
			<p>no-cache</p>
			<CurrentTime />
			<p>{result}</p>
		</>
	);
};
