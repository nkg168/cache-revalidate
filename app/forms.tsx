import { Suspense } from "react";
import {
	formAction,
	formActionCookieGet,
	formActionCookieSet,
	formActionRedirect,
	formActionRevalidatePathRoot,
	formActionRevalidatePathStatic,
	formActionRevalidateTag5,
	formActionRevalidateTagId,
	formActionRevalidateTagIndefinitely,
} from "./functions";

export const Forms = () => (
	<div className="flex gap-2">
		<Form />
		<FormRevalidatePathStatic />
		<FormRevalidatePathRoot />
		<FormRevalidate5 />
		<FormRevalidateIndefinitely />
		<FormRevalidateId id={"1"} />
		<FormRevalidateId id={"2"} />
		<FormRedirect />
		<FormCookieSet />
		<FormCookieGet />
	</div>
);

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

const FormRevalidateId = ({ id }: { id: string }) => {
	return (
		<form action={formActionRevalidateTagId}>
			<input type="hidden" name="id" value={id} />
			<button type="submit">RevalidateTagId {id}</button>
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
