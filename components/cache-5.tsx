import { getCurrentTimeAsync } from "@/lib";
import { revalidateTag, unstable_cache } from "next/cache";
import { CurrentTime } from "./current-time";
export const Tag = "tag5";

const getData = unstable_cache(
	// https://nextjs.org/docs/14/app/building-your-application/caching#time-based-revalidation
	async () => {
		const result = await getCurrentTimeAsync();
		console.log(`${result} getData ${Tag}`);
		return result;
	},
	undefined,
	{
		revalidate: 5,
		tags: [Tag],
	},
);

export const ResultCache5 = async () => {
	const result = await getData();
	return (
		<>
			<p>unstable cache 5</p>
			<CurrentTime />
			<p>{result}</p>
		</>
	);
};

export const FormRevalidate5 = () => {
	const revalidate = async () => {
		"use server";
		console.log(`revalidate ${Tag}`);
		revalidateTag(Tag);
	};
	return (
		<form action={revalidate}>
			<button type="submit">RevalidateTag {Tag}</button>
		</form>
	);
};
