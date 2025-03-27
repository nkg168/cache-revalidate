import { ResultCache5 } from "@/components/cache-5";
import { ResultCacheIndefinitely } from "@/components/cache-id-indefinitely";
import { Fallback } from "@/components/fallback";
import { ResultNoCache } from "@/components/no-cache";
import { Suspense } from "react";
import { Forms } from "../forms";

export default async function MixPage() {
	return (
		<div>
			<Forms />
			<div className="grid grid-cols-3 gap-x-3 w-fit tabular-nums">
				<Suspense fallback={<Fallback />}>
					<ResultNoCache />
				</Suspense>
				<Suspense fallback={<Fallback />}>
					<ResultCache5 />
				</Suspense>
				<Suspense fallback={<Fallback />}>
					<ResultCacheIndefinitely tag={"1"} />
				</Suspense>
				<Suspense fallback={<Fallback />}>
					<ResultCacheIndefinitely tag={"2"} />
				</Suspense>
			</div>
		</div>
	);
}
