import { Suspense } from "react";
import { Forms } from "../forms";
import {
	getData,
	getDataUnstableCache5,
	getDataUnstableCacheId,
	getDataUnstableCacheIndefinitely,
} from "../functions";
import { getCurrentTime } from "../lib";

export default async function MixPage() {
	return (
		<div>
			<Forms />
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
				<Suspense fallback={<p>Loading...</p>}>
					<ResultUnstableCacheId id={"1"} />
				</Suspense>
				<Suspense fallback={<p>Loading...</p>}>
					<ResultUnstableCacheId id={"2"} />
				</Suspense>
			</div>
		</div>
	);
}

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

const ResultUnstableCacheId = async ({ id }: { id: string }) => {
	const result = await getDataUnstableCacheId(id);
	return (
		<>
			<p>unstable cache id {id}</p>
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
