import { getCurrentTimeAsync } from "@/lib";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import { CurrentTime } from "./current-time";

// https://github.com/vercel/next.js/discussions/61638
export const getData = (tag: string) =>
	unstable_cache(
		async (tag) => {
			const result = await getCurrentTimeAsync();
			console.log(`${result} getData Indefinitely ${tag}`);
			return result;
		},
		undefined,
		{
			tags: [tag],
			revalidate: false, //Omit or pass false to cache indefinitely or until matching revalidateTag() or revalidatePath() methods are called.
		},
	)(tag);

export const ResultCacheIndefinitely = async ({ tag }: { tag: string }) => {
	const result = await getData(tag);
	return (
		<>
			<p>unstable cache Indefinitely {tag}</p>
			<CurrentTime />
			<p>{result}</p>
		</>
	);
};

export const FormRevalidateIndefinitely = ({ tag }: { tag: string }) => {
	const revalidate = async (form: FormData) => {
		"use server";
		const tag = form.get("tag")?.toString();
		if (!tag) throw new Error("id is required");
		console.log(`revalidate ${tag}`);
		// Revalidating data on-demand by path with (revalidatePath) or by cache tag with (revalidateTag)
		// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
		revalidateTag(tag);
	};
	return (
		<form action={revalidate}>
			<input type="hidden" name="tag" value={tag} />
			<button type="submit">RevalidateTagIndefinitely {tag}</button>
		</form>
	);
};
