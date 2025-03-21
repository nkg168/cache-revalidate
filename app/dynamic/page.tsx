import { Forms } from "../forms";
import { getCurrentTime } from "../lib";

export const dynamic = "force-dynamic";
// cookies(), headers() and useSearchParams()も同様
// https://nextjs.org/docs/14/app/building-your-application/rendering/server-components#dynamic-functions

export default function () {
	return (
		<div>
			<Forms />
			<p>{getCurrentTime()}</p>
		</div>
	);
}
