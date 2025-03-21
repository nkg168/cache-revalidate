import { Suspense } from "react";
import { getCurrentTime } from "../lib";
import {
	formAction,
	formActionCookieGet,
	formActionCookieSet,
	formActionRedirect,
	formActionRevalidatePathRoot,
	formActionRevalidatePathStatic,
	formActionRevalidateTag5,
	formActionRevalidateTagIndefinitely,
	getData,
	getDataUnstableCache5,
	getDataUnstableCacheIndefinitely,
} from "./functions";

export default async function () {
	return (
		<div>
			<div className="flex gap-2">
				<Form />
				<FormRevalidatePathStatic />
				<FormRevalidatePathRoot />
				<FormRevalidate5 />
				<FormRevalidateIndefinitely />
				<FormRedirect />
				<FormCookieSet />
				<FormCookieGet />
			</div>
			<div className="grid grid-cols-3 gap-x-3 w-fit tabular-nums">
				<Suspense fallback={<p>Loading...</p>}>
					<Result />
				</Suspense>
				<Suspense fallback={<p>Loading...</p>}>
					<ResultUnstableCache5 />
				</Suspense>
				<Suspense fallback={<p>Loading...</p>}>
					<ResultUnstableCacheIndefinitely />
				</Suspense>
			</div>
		</div>
	);
}

const Form = () => {
	return (
		<form action={formAction}>
			<button type="submit">アクション</button>
		</form>
	);
};

const FormRevalidatePathStatic = () => {
	return (
		<form action={formActionRevalidatePathStatic}>
			<button type="submit">RevalidatePathStatic</button>
		</form>
	);
};

const FormRevalidatePathRoot = () => {
	return (
		<form action={formActionRevalidatePathRoot}>
			<button type="submit">RevalidatePathRoot</button>
		</form>
	);
};

const FormRevalidate5 = () => {
	return (
		<form action={formActionRevalidateTag5}>
			<button type="submit">RevalidateTag5</button>
		</form>
	);
};

const FormRevalidateIndefinitely = () => {
	return (
		<form action={formActionRevalidateTagIndefinitely}>
			<button type="submit">RevalidateTagIndefinitely</button>
		</form>
	);
};

const FormRedirect = () => {
	return (
		<form action={formActionRedirect}>
			<button type="submit">Redirect</button>
		</form>
	);
};

const FormCookieSet = () => {
	return (
		<form action={formActionCookieSet}>
			<button type="submit">Cookie Set</button>
		</form>
	);
};

const FormCookieGet = () => {
	return (
		<form action={formActionCookieGet}>
			<button type="submit">Cookie Get</button>
		</form>
	);
};

const Result = async () => {
	const result = await getData();
	return (
		<>
			<p>no-cache</p>
			<RenderTime />
			<p>{result}</p>
		</>
	);
};

const ResultUnstableCache5 = async () => {
	const result = await getDataUnstableCache5();
	return (
		<>
			<p>unstable cache 5</p>
			<RenderTime />
			<p>{result}</p>
		</>
	);
};

const ResultUnstableCacheIndefinitely = async () => {
	const result = await getDataUnstableCacheIndefinitely();
	return (
		<>
			<p>unstable cache Indefinitely</p>
			<RenderTime />
			<p>{result}</p>
		</>
	);
};

const RenderTime = () => {
	return <p>{getCurrentTime()}</p>;
};
