import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FormRevalidate5 } from "./components/cache-5";
import { FormRevalidateIndefinitely } from "./components/cache-id-indefinitely";

export const Forms = () => (
	<div className="flex gap-2">
		<Form />
		<FormRevalidatePathStatic />
		<FormRevalidatePathRoot />
		<FormRevalidate5 />
		<FormRevalidateIndefinitely tag={"1"} />
		<FormRevalidateIndefinitely tag={"2"} />
		<FormRedirectToMix />
		<FormCookieSet />
		<FormCookieGet />
	</div>
);

const Form = () => {
	const action = async () => {
		"use server";
		console.log("formAction");
	};
	return (
		<form action={action}>
			<button type="submit">Just call</button>
		</form>
	);
};

const FormRevalidatePathStatic = () => {
	const action = async () => {
		"use server";
		// Revalidating data on-demand by path with (revalidatePath) or by cache tag with (revalidateTag)
		// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
		console.log("revalidatePath /static");
		// アクションを実行したページのRouter Cache&指定したページのRouter/Data Cacheが無効化される
		// revalidatePath purges the Data Cache and Full Route Cache
		revalidatePath("/static");
	};
	return (
		<form action={action}>
			<button type="submit">RevalidatePath /static</button>
		</form>
	);
};

const FormRevalidatePathRoot = () => {
	const action = async () => {
		"use server";
		// Revalidating data on-demand by path with (revalidatePath) or by cache tag with (revalidateTag)
		// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
		console.log("revalidatePath /");
		revalidatePath("/");
	};
	return (
		<form action={action}>
			<button type="submit">RevalidatePath /</button>
		</form>
	);
};

const FormRedirectToMix = () => {
	const action = async () => {
		"use server";
		console.log("redirect to /mix");
		redirect("/mix");
	};
	return (
		<form action={action}>
			<button type="submit">Redirect to /mix</button>
		</form>
	);
};

const FormCookieSet = () => {
	const setCookie = async () => {
		"use server";
		// Using cookies.set or cookies.delete invalidates the Router Cache to prevent routes that use cookies from becoming stale (e.g. authentication).
		// https://nextjs.org/docs/14/app/building-your-application/caching#invalidation-1
		console.log("setCookie");
		cookies().set("cookie", "cookie");
	};
	return (
		<form action={setCookie}>
			<button type="submit">Set cookie</button>
		</form>
	);
};

const FormCookieGet = () => {
	const getCookie = async () => {
		"use server";
		console.log("getCookie");
		// クッキーを取得するだけだからRouter Cacheは無効化されない
		cookies().get("cookie");
	};
	return (
		<form action={getCookie}>
			<button type="submit">Get cookie</button>
		</form>
	);
};
