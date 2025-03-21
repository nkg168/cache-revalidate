"use server";

import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCurrentTimeAsync } from "../lib";

export const formAction = async (formData: FormData) => {
	console.log("formAction");
};

export const getData = async () => {
	const result = await getCurrentTimeAsync();
	console.log(`${result} getData`);
	return result;
};
const Tag5 = "tag5";

export const formActionRevalidateTag5 = async (formData: FormData) => {
	console.log("formActionRevalidateTag");
	revalidateTag(Tag5);
};

export const getDataUnstableCache5 = unstable_cache(
	// https://nextjs.org/docs/14/app/building-your-application/caching#time-based-revalidation
	async () => {
		const result = await getCurrentTimeAsync();
		console.log(`${result} getDataUnstableCache5`);
		return result;
	},
	[Tag5],
	{
		revalidate: 5,
		tags: [Tag5],
	},
);

// https://github.com/vercel/next.js/discussions/61638
export const getDataUnstableCacheId = (id: string) =>
	unstable_cache(
		async (id) => {
			const result = await getCurrentTimeAsync();
			console.log(`${result} getDataUnstableCacheId`, id);
			return result;
		},
		undefined,
		{
			tags: [id],
			revalidate: false,
		},
	)(id);

export const formActionRevalidateTagId = async (formData: FormData) => {
	const id = formData.get("id")?.toString();
	if (!id) throw new Error("id is required");
	console.log("formActionRevalidateTagId", id);
	revalidateTag(id);
};

const TagIndefinitely = "TagIndefinitely";

export const formActionRevalidateTagIndefinitely = async (
	formData: FormData,
) => {
	// Revalidating data on-demand by path with (revalidatePath) or by cache tag with (revalidateTag)
	// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
	console.log("formActionRevalidateTagIndefinitely");
	revalidateTag(TagIndefinitely);
};

export const getDataUnstableCacheIndefinitely = unstable_cache(
	async () => {
		const result = await getCurrentTimeAsync();
		console.log(`${result} getDataUnstableCacheIndefinitely`);
		return result;
	},
	[TagIndefinitely],
	{
		revalidate: false, //Omit or pass false to cache indefinitely or until matching revalidateTag() or revalidatePath() methods are called.
		tags: [TagIndefinitely],
	},
);

export const formActionRevalidatePathRoot = async (formData: FormData) => {
	// Revalidating data on-demand by path with (revalidatePath) or by cache tag with (revalidateTag)
	// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
	console.log("formActionRevalidatePathRoot");
	revalidatePath("/");
};

export const formActionRevalidatePathStatic = async (formData: FormData) => {
	// Revalidating data on-demand by path with (revalidatePath) or by cache tag with (revalidateTag)
	// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
	console.log("formActionRevalidatePathStatic");
	// アクションを実行したページ&指定したページのRouter Cacheが無効化される
	revalidatePath("/static");
};

export const formActionRedirect = async (formData: FormData) => {
	console.log("formActionRedirect");
	redirect("/mix");
};

export const formActionCookieSet = async (formData: FormData) => {
	// Using cookies.set or cookies.delete invalidates the Router Cache to prevent routes that use cookies from becoming stale (e.g. authentication).
	// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
	console.log("formActionCookieSet");
	cookies().set("cookie", "cookie");
};

export const formActionCookieGet = async (formData: FormData) => {
	console.log("formActionCookieGet");
	// クッキーを取得するだけだからRouter Cacheは無効化されない
	cookies().get("cookie");
};
